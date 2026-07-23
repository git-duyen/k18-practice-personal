# Lesson 06 - Git, Javascript Advanced

## Git

### Clone

* Clone repo về máy

  ```bash
  git clone <repo>
  git clone <repo> <new-name>
  ```
* Tùy repo hỗ trợ **SSH** hay **HTTPS** thì chọn cho phù hợp để không phải nhập mật khẩu mỗi lần push/pull.
* Lấy code mới từ branch

  ```bash
  git pull origin main
  ```

### Stash

* Cất tạm thay đổi đang làm

  ```bash
  git stash
  git stash save "message"
  git stash -u      # có cả file mới
  git stash list    # xem các lần stash
  ```
* Lấy ra làm tiếp

  ```bash
  git stash pop
  git stash pop stash@{n}
  ```

---

# Javascript

## Class

* Class = khuôn mẫu tạo Object.
* Gồm:

  1. Constructor (khởi tạo)
  2. Properties (thuộc tính)
  3. Methods (hành động)

```js
class Game {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    play() {
        console.log(`${this.name} ${this.type} chơi!`);
    }
}

const game = new Game("Chess", "Strategy");
game.play();
```

Ưu điểm:

* Tái sử dụng.
* Dễ quản lý.
* Hỗ trợ kế thừa.

---

# Typescript

* TS = JS + kiểu dữ liệu.
* Cuối cùng vẫn compile thành JS.

### Khai báo kiểu

```ts
let age: number = 25;     
let name: string = "Dat";
let hobby: string[] = ["A", "B"];
```

Nhiều kiểu dữ liệu:

```ts
let result: number | string;
```

---

## Interface

* Định nghĩa cấu trúc của Object.
* Giúp object luôn đúng field và đúng kiểu.

```ts
interface Game {
    name: string;
    type: string;
    players: number;
}

const game: Game = {
    name: "Chess",
    type: "Strategy",
    players: 2;
};
```

---

## Class trong TS

* Giống JS nhưng phải khai báo kiểu dữ liệu.

```ts
class Game {
    public name: string;
    public type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    public play(): void {
        console.log(`${this.name} ${this.type} chơi!`);
    }
}
```
