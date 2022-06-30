import { useRef, useState } from "react";
import styled from "styled-components";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin: 20px 0px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 5px solid rgb(58, 170, 91);
  position: relative;
  overflow: hidden;
  h5 {
    text-align: right;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 25px;
  }
`;

const Alert = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  span {
  }
`;

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  h2 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }
  ul {
    width: 100%;
    height: 100%;
    li {
      color: rgba(0, 0, 0, 0.7);
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      margin-bottom: 10px;
      transition: 0.5s;
      &:hover {
        transform: translateY(-5px);
      }
      span {
        margin-right: 5px;
        display: block;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        cursor: pointer;
        border-radius: 50%;
        &:hover {
          transform: scale(1.2);
          background-color: rgb(58, 170, 91);
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
            rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
      }
    }
  }
`;

const CommentsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
`;

const CommentsReBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilCircle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 170, 91);
  color: white;
  border-radius: 50%;
`;

const InputBox = styled.section`
  width: 100%;
  height: 250px;
  background-color: rgb(247, 247, 247);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 99;
  div {
    width: 90%;
    height: 200px;
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  input {
    border: none;
    border-bottom: 2px solid black;
    padding: 10px;
    margin-bottom: 5px;
  }
  textarea {
    width: 90%;
    height: 150px;
    border: none;
    resize: none;
    padding: 10px;
  }
  button {
    position: absolute;
    z-index: 5;
    right: 10px;
    bottom: 10px;
    padding: 9px 15px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`;

const Home = () => {
  const [edit, setEdit] = useState("");
  const [inputs, setInputs] = useState({
    username: "",
    comment: "",
    active: false,
  });
  const { username, comment } = inputs;
  const onChange2 = (e) => {
    setEdit(e.target.value);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const [users, setUsers] = useState([
    { id: 1, username: "추홍규", comment: "하기 싫다", active: false },
    { id: 5, username: "민지원", comment: "열심히 하셔야죠.", active: false },
    { id: 6, username: "강대국", comment: "열심히 하셔야죠", active: false },
  ]);

  const nextId = useRef(7);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      comment,
    };
    setUsers([...users, user]);
    setInputs({ username: "", comment: "" });
    nextId.current += 1;
    console.log(user);
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onHandle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, comment: edit, active: !user.active } : user
      )
    );
  };
  return (
    <Wrapper>
      <Header>
        <h1>댓글 앱</h1>
      </Header>
      <Alert>
        <h5>댓글창 ({users.length})</h5>
      </Alert>
      <Container>
        <ul>
          {users.map((file, index) => (
            <li
              style={
                !file.active
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "hotpink" }
              }
              key={index}
            >
              <ProfilCircle>{file.username}</ProfilCircle>
              <CommentsBox>
                <h2>{file.username}</h2>
                {!file.active ? (
                  <p>{file.comment}</p>
                ) : (
                  <textarea
                    id={file.id}
                    onChange={onChange2}
                    name="comment"
                    value={edit}
                  ></textarea>
                )}
              </CommentsBox>
              <CommentsReBox>
                <span onClick={() => onHandle(file.id)}>
                  {file.active ? "완료" : "✔"}
                </span>
                <span onClick={() => onRemove(file.id)}>✖️</span>
                {/* <span onClick={() => onToggle(file.id)}>수정</span> */}
              </CommentsReBox>
            </li>
          ))}
        </ul>
        <InputBox>
          <div>
            <input
              comment="text"
              name="username"
              value={username}
              placeholder="성함"
              onChange={onChange}
            />
            <textarea
              name="comment"
              value={comment}
              placeholder="내용없음"
              onChange={onChange}
            />
            <button onClick={onCreate}>등록</button>
          </div>
        </InputBox>
      </Container>
    </Wrapper>
  );
};

export default Home;
