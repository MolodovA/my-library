import {ModalInfoProps} from "./ModalInfo";
import React, {FC, useEffect} from "react";

const Homework: FC<ModalInfoProps> = ({nameSubjects, open, onClose, data}) => {

  useEffect(() => {
    setTimeout(() => {
      console.log('data', data)
    }, 1000)
  }, [])
  return (
    <div>
      домашняя работа по предмету {nameSubjects}
      описание: {open && "описание ляляляля...."}
      <button onClick={onClose}>Закрыть описание</button>
    </div>
  );
};

export default Homework;