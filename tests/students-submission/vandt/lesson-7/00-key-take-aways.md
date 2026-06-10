## Phần 1: Phân biệt js và ts
- javascript là ngôn ngữ gốc
- typescript là thông dịch giúp javascript trở nên tin cậy hơn.
```
Chạy js => node <ten file>

Chạy ts => npx ts-node <ten file>
            npx tsx <ten file>
            npx tsc <ten file>
        Phụ thuộc vào từng phiên bản nodejs
```
## Phần 2: DOM mối quan hệ

- **seft**: node hiện tại
- **parent**: cha => là node phía trên trực tiếp của node hiện tại
- **children**: con => là node phía dưới trực tiếp của node hiện tại
- **ancestor**: tổ tiên => là các node cha và cha của cha (trên cùng 1 trực hệ )
- **descendant**: hậu duệ => là các node con cháu, chắt (tất cả các con cháu chắt, không cần trong trực hệ)
- **sibling**: anh em => là những phần tử cùng cấp và cùng cha
- **following**: theo sau => gồm các node ở phía bên tay phải của node hiện tại (không lấy những node con của node hiện tại) - tương đương với các node ở bên dưới thẻ đóng của thẻ hiện tại.
- **preceding**: phía trước => gồm các node phía bên tay trái của node hiện tại, trừ các node ancestor
- **following-sibling**: anh em phía sau (kết hợp 2 điều kiện của following và sibling)
- **preceding-sibling**: anh em phía trước (kết hợp 2 điều kiện của preceding và sibling)

## Phần 3: XPATH - advance methods
### 3.1 Xpath axes mothods: phương thức trục xpath
- Là các phương thức để điều hướng và chọn các node trong cây DOM XML/HTML dựa trên mối quan hệ giữa các node với nhau.
- Công dụng:
    - Tìm kiếm elements dựa trên vị trí tương đối (parent, child, sibling, ancestor,..)
    - Linh hoạt hơn việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối.
- Nội dung:
1. **wildcard**: * => khớp tất cả
    ```
    vd: //div => khớp thẻ div
    //* => khớp tất cả các loại thẻ
    ```
2. **child**: con trực tiếp
    ```
    vd: //form[@id='test-form']/child::button
    => ra tất cả các button con trực tiếp của form
    ```
3. **descendant** - tất cả con cháu
    ```
    vd: tìm tất cả input bên trong form
    //form[@id='test-form']/descendant::input
    ```
4. **parent**: tìm cha
    ```
    tìm cha của button "create"
    => //button[text()='create']/parent::form
    ```
5. **ancestor** - tổ tiên
    ```
    từ button Edit trong table, tìm table tổ tiên
    //button[@class = 'btn-edit']/ancestor::table
    ```
6. **following-sibling** - Anh em phía sau
    ``` 
    Từ lable "Test case" tìm input cùng cấp ngay sau nó.

    //lable[@for='testCase']/following-sibling::input
    ```
7. **preceding-sibling** - Anh em đứng sau
    ``` 
    Từ lable "Test case" tìm input đứng trước nó

    //lable[@for='testCase']/preceding-sibling::input
    ```
8. **following** => tất cả các node phía sau
9. **ancestor-or-self** => tổ tiên hoặc chính nó
10. **preceding** => tất cả các node phía trước
11. **descendant-or-self** => con cháu hoặc chính nó.
### 3.2 Xpath Axes
#### 1. Tại sao cần dùng?
Thực tế có những node khong có 1 thuộc tính đặc trưng duy nhất => nên cần dựa trên 1 xpath khác, dựa vào mối quan hệ của node đó với node cần tìm để ra được xpath tương ứng.

#### 2. Cú pháp
```
//tag/relationship::tagname[@attr='value']
```
#### 3. Ví dụ
VD: 
```
//lable[@for=”username”]/parent::div
````
```
//form[@id=”registrationForm”]/child::div[@id=”parent”]
```
```
//form[@id=”registrationForm”]/preceding::*
=> toàn bộ các thẻ bên trên nhưng k bao gồm  thẻ cha (trong trực hệ ) của nó
```
```
//form[@id=”registrationForm”]/preceding-sibling::*
=> là những thẻ cùng cha nhưng nằm phía bên trên
```
```
//form[@id=”registrationForm”]/follwing-sibling::*
=> là những thẻ cùng cha nhưng nằm phía bên dưới
```

