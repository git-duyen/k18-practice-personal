Lesson 7

Selector advanced: DOM Relation · XPath advanced · XPath Axes · XPath Functions

1. Quy ước màu khi xác định Relation

🔵 Xanh dương — node gốc: node dùng làm điểm bắt đầu của cây.
🟢 Xanh lá — node hiện tại: node mà ta đang đứng / đang xét.
🟠 Cam — node cần chú ý: node mà ta muốn xác định quan hệ với node hiện tại.

2. DOM Relation — các mối quan hệ trong DOM

self — chính node đang đứng, không di chuyển đi đâu.

Ý nghĩa: dùng để kiểm tra hoặc lọc thêm điều kiện ngay trên node hiện tại, xác nhận nó có đúng loại thẻ / đúng thuộc tính mình cần hay không.

parent — cha, node bao bọc trực tiếp bên ngoài node hiện tại.

Ý nghĩa: đi lên đúng 1 cấp. Mỗi node chỉ có duy nhất 1 parent, nên kết quả luôn là 1 node.
Dùng khi: element cần tìm không có thuộc tính đặc biệt, nhưng element con bên trong nó thì có.

children — con, các node nằm ngay dưới node hiện tại, cách đúng 1 bậc.

Ý nghĩa: chỉ lấy đời con trực tiếp; cháu, chắt (nằm sâu hơn) không được tính.
Dùng khi: muốn giới hạn phạm vi tìm kiếm, tránh lấy nhầm element trùng tên thẻ nằm sâu bên trong.

ancestor — tổ tiên, tất cả node ở phía trên: cha → ông → cụ → … → <html>.

Ý nghĩa: đi lên không giới hạn số cấp, nên kết quả thường là nhiều node.
Dùng khi: cần nhảy từ một element đặc trưng lên khối cha bao ngoài (card, row, form) mà không biết chính xác nó cách bao nhiêu cấp.

descendant — hậu duệ, tất cả node ở phía dưới: con → cháu → chắt → …

Ý nghĩa: đi xuống không giới hạn số cấp, lấy hết mọi thứ nằm bên trong node hiện tại.
Dùng khi: biết element cần tìm nằm đâu đó bên trong một khối, nhưng không rõ cấu trúc lồng nhau ra sao.

sibling — anh em, các node cùng cấp và cùng chung một cha.

Ý nghĩa: đứng ngang hàng với node hiện tại, không lên cũng không xuống cấp.

following — theo sau, tất cả node nằm phía sau node hiện tại trong DOM, ở mọi cấp.

Ý nghĩa: xét theo thứ tự đọc của tài liệu (từ trên xuống dưới), không cần cùng cha.
Lưu ý: không lấy các node con / hậu duệ của node hiện tại, vì chúng nằm bên trong chứ không phải phía sau.

preceding — phía trước, tất cả node nằm trước node hiện tại trong DOM, ở mọi cấp.

Ý nghĩa: là những node đã được mở và đóng thẻ hoàn tất trước khi tới node hiện tại.
Lưu ý: không lấy các node ancestor, vì thẻ cha vẫn đang mở và đang bao lấy node hiện tại.

following-sibling — anh em phía sau: node vừa đứng phía sau, vừa cùng cha với node hiện tại.

Ý nghĩa: hẹp hơn following vì bị giới hạn trong cùng một cha.
Dùng khi: lấy dữ liệu nằm bên phải/bên dưới một nhãn, ví dụ từ ô tiêu đề lấy sang ô giá trị trong cùng một hàng.

preceding-sibling — anh em phía trước: node vừa đứng phía trước, vừa cùng cha với node hiện tại.

Ý nghĩa: hẹp hơn preceding vì bị giới hạn trong cùng một cha.

Phân biệt nhanh: ancestor/descendant xét theo chiều dọc (lên – xuống cấp) · following/preceding xét theo thứ tự đọc tài liệu (trước – sau) · *-sibling là following/preceding nhưng thêm ràng buộc cùng cha.

3. XPath — các cách viết nâng cao

* (wildcard) — thẻ gì cũng được, không cần chỉ rõ tên thẻ.

//tag/*

[@attr] — tìm element có thuộc tính đó, không quan tâm giá trị là gì.

//tag[@attr]

and — phải đúng cả hai điều kiện.

//tag[dieu_kien_1 and dieu_kien_2]

or — đúng điều kiện này hoặc điều kiện kia đều được.

//tag[dieu_kien_1 or dieu_kien_2]

text() — kiểm tra chữ nằm trực tiếp bên trong element.

//tag[text()='<gia tri>']

normalize-space() — dọn khoảng trắng thừa trước khi kiểm tra chữ.

//tag[normalize-space()='<gia tri>']
Mẹo: thấy text giống hệt nhau nhưng XPath không tìm ra → thử normalize-space().

contains() — element có chứa phần chữ đang tìm, không cần khớp toàn bộ.

//tag[contains(text(),'<gia tri>')]

starts-with() — giá trị bắt đầu bằng phần đang tìm.

//tag[starts-with(@attr,'<gia tri>')]

not() — không thỏa điều kiện bên trong (phủ định / ngược lại).

//tag[not(@attr)]

4. XPath Axes 

Không phải lúc nào element cần tìm cũng có thuộc tính đủ đặc biệt (id, name, class) để viết XPath trực tiếp. Khi đó ta dựa vào vị trí và mối quan hệ của nó với các element khác để tìm.

4.1. Cú pháp chung
//tag / relationship :: tagname [@attr='value']


//tag — tìm node bắt đầu, đứng tại đó trước.
relationship:: — từ node đang đứng, đi theo mối quan hệ nào (parent::, child::, ancestor::, following-sibling::...).
tagname — đi theo quan hệ đó rồi lấy thẻ nào.
[@attr='value'] — trong các thẻ vừa tìm được, chỉ giữ thẻ thỏa điều kiện.

4.2. Danh sách các Axes

child:: — đứng tại node hiện tại → đi xuống 1 cấp → lấy các node con trực tiếp. Node nằm sâu hơn không lấy.
descendant:: — đi xuống tất cả các cấp → lấy con, cháu, chắt...
parent:: — đi lên 1 cấp → lấy node cha trực tiếp.
ancestor:: — đi lên tất cả các cấp → lấy cha, ông, cụ...
following-sibling:: — tìm node cùng cha → lấy những node đứng phía sau.
preceding-sibling:: — tìm node cùng cha → lấy những node đứng phía trước.
following:: — nhìn về phía sau trong DOM, lấy node ở mọi cấp, không cần cùng cha. Không lấy node con bên trong node hiện tại.
preceding:: — nhìn về phía trước trong DOM, lấy node ở mọi cấp. Không lấy ancestor của node hiện tại.
attribute:: (viết tắt @) — lấy thuộc tính của chính node đó: id, class, href...
self:: — không đi đâu cả, kiểm tra chính node hiện tại.
descendant-or-self:: — lấy chính node hiện tại + tất cả node bên dưới nó (descendant + self).
ancestor-or-self:: — lấy chính node hiện tại + tất cả node phía trên nó (ancestor + self).
namespace:: — lấy thông tin namespace của node. Hiếm dùng khi test HTML thông thường. (Namespace dùng để xác định một nhóm/tên XML, giúp phân biệt các element có thể trùng tên nhưng thuộc nhóm khác nhau.)

4.3. Kết hợp nhiều Axes

Có thể nối liên tiếp nhiều quan hệ trong một XPath — đi tới đâu thì lọc tiếp tới đó:

//tag[@attr='value']/relationship1::tag1/relationship2::tag2

Kết hợp thêm với predicate lọc vị trí:

//tag/following-sibling::tag[position() <= 2]

5. XPath Functions — nhóm xử lý chuỗi

concat(str1, str2, ...) — nối nhiều chuỗi lại thành một chuỗi.
starts-with(str, prefix) — kiểm tra chuỗi có bắt đầu bằng chuỗi khác không.
contains(str, substring) — kiểm tra chuỗi có chứa một đoạn chuỗi khác không.
string-length(str) — đếm số ký tự trong chuỗi.
normalize-space(str) — xóa khoảng trắng thừa ở đầu/cuối và gộp nhiều khoảng trắng giữa các từ thành 1.
translate(str, from, to) — thay từng ký tự này bằng ký tự khác.
lower-case(str) — chuyển toàn bộ chuỗi thành chữ thường.
upper-case(str) — chuyển toàn bộ chuỗi thành chữ HOA.
replace(str, pattern, replacement) — tìm và thay thế một phần trong chuỗi.
tokenize(str, pattern) — tách một chuỗi thành nhiều phần dựa vào ký tự/pattern.
ends-with(str, suffix) — kiểm tra chuỗi có kết thúc bằng chuỗi khác không.