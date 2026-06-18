# **Lesson 3**
## Git
### Undo actions
+ STG to local 
	+ Git restore --staged <file_name>
	+ Git restore --staged .
+ Repo to local
	+ Git reset HEAD~<so_commit>

### Branch model
+ git branch //xem danh sach nhanh
+ git branch <ten_nhanh> 	// tao nhanh moi 
+ Git checkout <ten_nhanh> // chuyen sang nhanh moi 
+ git checkout -b <ten_nhanh> // vua tao, vua chuyen sang nhanh moi 
+ git branch -d <ten_nhanh> // xoa branch
+ Git Ignore file format
### Git amend
+ git commit --amend -m "message" // sua commit msg

+ git add <ten_file>
git commit --amend --no-edit // quen them file <ten_file> vao commit truoc -> them file vao va giu nguyen msg cu
+ git commit --amend -m "msg" // vua them file vua sua msg

+ git  reset HEAD~<ten_file>
git commit --amend --no-edit // xoa file khoi commit cuoi

## Javascript 
### Convention
Common convention : 
+ snake_case // tam thoi khong dung
+ kebab-case // dat ten file & folder 
+ camelCase // dat ten bien & ham
+ Pascal case // dat ten class
### Console log 
+ console.log('Text ${ten_bien}') // su dung kem voi variable
+ console.log("Text1" + ten_hang + "text2")
### Objects
const/let <ten_bien> ={ key1: value1, key2: value2,...} // khai bao
console.log(tenObject.key1.key2);
console.log(tenObject["key1"]["key2"]) //neu co ky tu dac biet bat buoc dung cach nay
### Function
function ten_function(giatri1,giatri2)
### Array
const arr = [1,2,3]; //khai bao
console.log(arr[0]); //truy xuat
console.log(arr.lenght); // lay so luong phan tu
