# Comments_app

---

# 주요 기능

- 댓글 작성
- 댓글 삭제
- 댓글 수정

----

[배포 페이지](http://chuhongkyu.github.io/Comments_app) - http://chuhongkyu.github.io/Comments_app

---

# 자바스크립의 불변성을 활용하여 리액트

    ```
    "불변성의 진짜 의미는 메모리 영역에서 값을 변경할 수 없다는 의미입니다."
    ```

- 리액트에서 불변성을 지켜주는 이유는 리액트가 상태 업데이트를 하는 원리 때문입니다. 리액트는 상태값을 업데이트 할 때 <얕은 비교>를 수행합니다.
  <얕은 비교>란 객체의 프로퍼티를 하나하나 다 비교하지 않고, 객체의 참조 주소값만 변경되었는지 확인합니다.

- 불변성이란 메모리 영역의 값을 변경할 수 없는 것이다.
- 리액트는 불변성을 지켜줌으로써 효율적인 상태업데이트를 한다.
- 리액트는 불변성을 지켜줌으로써 사이드 이펙트를 사전 방지하고 프로그래밍의 구조를 단순하게 유지한다.
- 불변성을 가진 원시타입과 달리 참조타입의 경우에는 의도적으로 불변성을 지켜주어야한다. 이 때 새로운 주소 값을 가진 객체를 생성하여 상태를 업데이트 해준다. spread operator, map, filter, slice, reduce 메소드들을 활용한다.

---

# 함수를 보면서

- 생성

  ```
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
  ```

  - 배열은 참조 타입이다. 참조 타입은 값을 바꿀 수 있다. 그래서 의도적으로 불변성을 지켜줘야한다. 배열에 push로 새로운 값을 추가하지 않고 ...spread 연산자로 기존에 것을 나열하고, 새로운 user를 추가해 합쳐준다. 새로운 주소 값을 가진 배열이 생성되어 리액트는 상태를 업데이트 한다.

  ```
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
  ```

  - 삭제 : 해당 요소의 id와 같지 않은 요소만 filter로 다시 나열
  - 수정 : 같은 id 라면 comment에 eidt으로 바꾸고 active는 반대로 해주고 같은 id가 아니라면 다시 user로 나열

---
