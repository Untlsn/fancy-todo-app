import React from 'react';
import { changePointsDirection, filter, pointsLength, setPoints, sortedPoints } from '~/store/points';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import CheckPoint from '~/components/molecules/CheckPoint';
import { removePoint } from '~/components/organisms/List/helpers';
import useReactiveEffect from '~/hooks/useReactiveEffect';

const ListCore = () => {
  useReactiveEffect(() => {
    filter();
    pointsLength();
  });

  return (
    <DragDropContext onDragEnd={changePointsDirection}>
      <Droppable droppableId='points'>
        {provided => (
          <ul className='p-0' {...provided.droppableProps} ref={provided.innerRef}>
            {
              sortedPoints().length
                ? sortedPoints().map(
                  ({ id }, i) => (
                    <Draggable key={id} draggableId={id} index={i}>
                      {provided => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <CheckPoint
                            id={id}
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
  );
};

export default ListCore;