import React, { useState } from 'react';
import Input from '~/components/molecules/Input';
import CheckPoint from '~/components/molecules/CheckPoint';
import { count, createPoint, removePoint, setCheck } from './helpers';
import { Point } from './types';
import BottomMenu from '~/components/molecules/BottomMenu';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';


const List = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [filter, setFilter] = useState(0);

  const sortedPoints= filter == 1
    ? points.filter(it => !it.check)
    : filter == 2
      ? points.filter(it => it.check)
      : points;

  const changePointsDirection = ({ source, destination }: DropResult) => setPoints(points => {
    const [reordered] = points.splice(source.index, 1);
    points.splice(destination!.index, 0, reordered);
    return points;
  });

  console.log(sortedPoints);

  return (
    <div>
      <Input onCommit={point => setPoints(old => [...old, createPoint(point)])} />
      <div className='bg-white dark:bg-gray-800 dark:text-white shadow-lg mt-8 rounded'>
        <DragDropContext onDragEnd={changePointsDirection}>
          <Droppable droppableId='points'>
            {provided => (
              <ul className='p-0' {...provided.droppableProps} ref={provided.innerRef}>
                {
                  sortedPoints.length
                    ? sortedPoints.map(
                      ({ id, text, check }, i) => (
                        <Draggable key={id} draggableId={id} index={i}>
                          {provided => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <CheckPoint
                                check={check}
                                text={text}
                                onCircleClick={() => setPoints(setCheck(id))}
                                onXClick={() => setPoints(removePoint(id))}
                              />
                            </div>
                          )}
                        </Draggable>
                      ),
                    ) : (
                      <div className='h-2' />
                    )
                }
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <BottomMenu
          leftPoints={count(points, point => !point.check)}
          onClear={() => setPoints(old => old.filter(val => !val.check))}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default List;