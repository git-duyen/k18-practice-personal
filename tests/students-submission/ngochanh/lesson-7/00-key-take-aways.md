Type: 
- Tạo kiểu dữ liệu nhưng không có method
```
type player = {
    name: string;
    position: string;
}
        
const ct1 : player = {
    name: "CT1",
    position: "Hau ve"
}

//không dùng type
const ct2 = {
    name: "CT2",
    position: "Tien ve"
}
```
- Không thể merge	
- Union & intersection	
```
type status = "success" | "fail"
type ID = string | number
```
    
DOM:
- Preceding: các thẻ bên trái thẻ hiện tại (trừ ancestor và children node hiện tại)
    

- Following: các thẻ bên phải thẻ hiện tại (trừ ancestor và children node hiện tại)
    

- Preceding-sibling: 
    

- Descendant:
    

Xpath:
- Wildcard: *  -> có thể là bất kỳ loại thẻ nào (div/span/form….), bất kỳ attribute nào 
```
        //* -> toàn bộ element
        //*[@id='username'] -> toàn bộ element có id = username
```
- Chứa thuộc tính: [@attribute = 'value']
    
    - And và or:
  
        `//*[@id='username' and class='classname']`

        `//*[@id='username' or class='classname']`
        
    - text(): text nhìn thấy trên màn hình
        
        `//div[text()='This is a text']`
        
    - normalize-space(): bỏ space ở đầu và cuối
  
        `//div[normalize-space() = "login"]`
        
    - contains(text(), '….'): tìm phần tử chứa cụm:
        
        `//div[contains(text(), 'Tôi là ')]`

    - starts-with
        
        `//*[starts-with(text(), 'username')]`
        
    - not: phủ định
        
        `//*[not(starts-with(text(), 'username'))]`
        
        
Xpath axes: hạn chế dùng index để bền vững
```
Xpath=//div[@class='mobile']/parent::span
//get <span> tag is parents of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/child::span
Xpath=//div[@class='mobile']/span
//get all <span> tag are direct children only of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/ancestor::div
//get all <div> tags are parents, ancestor of <div> tag with class = 'mobile'

Xpath=//div[@class='mobile']/descendant::span
Xpath=//div[@class='mobile']//span
//get all <span> tags are all nested child of div tag with class = 'mobile'

Xpath=//div[@class='mobile']/preceding::span
//get all <span> tag before<div> tag with class = 'mobile' 
//p[@class = "em3"]/preceding-sibling::* -> get all older siblings (same level)
//p[@class = "em3"]/preceding-sibling::p -> get <p> older sibling 
//p[@class = "em3"]/preceding-sibling::p[contains(text(), '1')] -> get <p> older sibling with classname contains "1"


Xpath=//div[@class='mobile']/following::span
//get all <span> tag after <div> tag with class = 'mobile'
//p[1]/following-sibling::* -> get all younger siblings (same level)
//p[1]/following-sibling::p -> get <p> younger sibling 
//p[1]/following-sibling::p[@class="elm3"] -> get <p> younger sibling with classname = "elm3"

```