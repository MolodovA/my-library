import Homework from "./Homework";
import React, {FC} from "react";

export interface ModalInfoProps {
  open: boolean;
  onClose: () => void;
  nameSubjects: string;
  data: { secret: string, id: number };
}

const ModalInfo: FC<ModalInfoProps> = (props) => {
  const {open, ...rest} = props;
  if (open) {
    return (
      <div>
        Контейнер домашки
        <Homework open {...rest}/>
      </div>
    )
  }
  return <div>'не работает'</div>
};

export default ModalInfo;