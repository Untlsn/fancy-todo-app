interface Event {
  run(): void
  dependencies: Set<Set<Event>>
}

interface WriteFn<T> {
  (newValue: T): void
  (fn: (newValue: T) => void): void
}

type Accessor<T> = () => T;

type Runner = () => void

const context: Event[] = [];

export const createSignal = <T>(value: T): [Accessor<T>, WriteFn<T>] => {
  const subs = new Set<Event>();

  return [
    () => {
      const event = context[context.length - 1];
      if (event) {
        subs.add(event);
        event.dependencies.add(subs);
      }
      return value;
    },
    (newValue) => {
      value = typeof newValue == 'function'
        ? (newValue as Function)(value) ?? value
        : newValue;

      for (const sub of [...subs]) {
        sub.run();
      }
    },
  ];
};

export function createEffect(fn: Runner) {
  const event: Event = {
    run() {
      for (const dep of event.dependencies) {
        dep.delete(event);
      }
      event.dependencies.clear();
      context.push(event);
      try {
        fn();
      } finally {
        context.pop();
      }
    },
    dependencies: new Set(),
  };

  event.run();
}

export function createMemo<T>(fn: Accessor<T>) {
  const [s, set] = createSignal<T | undefined>(undefined);
  createEffect(() => set(fn()));
  return s as Accessor<T>;
}