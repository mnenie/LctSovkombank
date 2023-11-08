import styles from "../HomeTasks/HomeTasks.module.scss";
import SubTask from "../SubTask/SubTask";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ModalTask from "../ModalTask/ModalTask";
import ModalEdit from "../ModalEdit/ModalEdit";
import ModalAdd from "../ModalAdd/ModalAdd";
const Task = ({ task, deleteTask }) => {
  const [isModer, setIsModer] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const route = useLocation();
  useEffect(() => {
    if (route.pathname === "/task") {
      setIsModer(true);
    }
  });
  const date = new Date(task.date * 1000);
  function pad(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
  }
  const openEditTask = () => {
    setFl(true);
    setIsOpenEditModal(true);
  };
  const openEditSubTask = () => {
    setFl(false);
    setIsOpenEditModal(true);
  };
  const [title, setTitle] = useState(task.task.title);
  
  const [titleSubTaskAdd, setTitleSubTaskAdd] = useState('');
  const [taskName, setTaskName] = useState(task.tolmut.name);
  const [data, setData] = useState(
    `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`
  );
  const addSubTask = () => {
    setIsOpenAddModal(true);
  };
  const inputsTask = [
    {
      id: 1,
      placeholder: "Введите название задачи",
      type: "text",
      value: title,
      onChange: setTitle,
      label: "Название задачи",
    },
    {
      id: 2,
      placeholder: "Введите тип задачи",
      type: "text",
      value: taskName,
      onChange: setTaskName,
      label: "Тип задачи",
    },
    {
      id: 3,
      placeholder: "Введите дату в формате XX.XX.XX",
      type: "text",
      value: data,
      onChange: setData,
      label: "Дата",
    },
  ];

  const inputsSubTaskAdd = [
    {
      id: 1,
      placeholder: "Введите название подзадачи",
      type: "text",
      value: titleSubTaskAdd,
      onChange: setTitleSubTaskAdd,
      label: "Название подзадачи",
    },
  ];
  return (
    <>
      <div className={styles.task}>
        <div className={styles.text}>
          <h3>{task.task.title}</h3>
          {isModer ? (
            <div className={styles.route}>
              <img
                onClick={() => setIsOpenModal(true)}
                src="/icons/1.png"
                alt=""
              />
              <div className={styles.line}></div>
              <span onClick={openEditTask}>Редактировать</span>
            </div>
          ) : (
            <div className={styles.route}>
              <img
                onClick={() => setIsOpenModal(true)}
                src="/icons/1.png"
                alt=""
              />
              <div className={styles.line}></div>
              <span>Построить маршрут</span>
            </div>
          )}
        </div>
        {isModer ? (
          <div>
            {task.task.sub_task.map((subtask) => (
              <SubTask
                key={Math.random()}
                task={subtask}
                mainTaskId={task.task.id}
                deleteTask={deleteTask}
                isModer={isModer}
                setIsModer={setIsModer}
                onClick={openEditSubTask}
              />
            ))}
            <div
              onClick={addSubTask}
              style={{ cursor: "pointer" }}
              className={styles.add_sub_task}
            >
              <img
                style={{ width: "40px", height: "40px" }}
                src="/icons/cross.svg"
                alt=""
              />
            </div>
          </div>
        ) : (
          task.task.sub_task.map((subtask) => (
            <SubTask
              key={Math.random()}
              task={subtask}
              mainTaskId={task.task.id}
              deleteTask={deleteTask}
              isModer={isModer}
              setIsModer={setIsModer}
            />
          ))
        )}
      </div>
      {isModer ? (
        <div>
          <ModalEdit task={task} isOpenEditModal={isOpenEditModal} setIsOpenEditModal={setIsOpenEditModal} inputs={inputsTask } />
          <ModalTask task={task} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
          <ModalAdd inputs={inputsSubTaskAdd} task={task} isOpenAddModal={isOpenAddModal} setIsOpenAddModal={setIsOpenAddModal} />
        </div>
      ) : (
        <ModalTask task={task} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};

export default Task;