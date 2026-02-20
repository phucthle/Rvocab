window.COURSE_DATA = (function() {
/*
| No. | EN | VI |
| :-- | :--- | :--- |
| 1 | a | Một |
| 2 | abandon | bỏ, từ bỏ |
| 3 | abandoned | bị bỏ rơi, bị ruồng bỏ |
| 4 | ability | khả năng, năng lực |
| 5 | able | có năng lực, có tài |
| 6 | about | khoảng, về |
| 7 | above | ở trên, lên trên |
| 8 | abroad | ở, ra nước ngoài, ngoài trời |
| 9 | absence | sự vắng mặt |
| 10 | absent | vắng mặt, nghỉ |
| 11 | absolute | tuyệt đối, hoàn toàn |
| 12 | absolutely | tuyệt đối, hoàn toàn |
| 13 | absorb | thu hút, hấp thu, lôi cuốn |
| 14 | abuse | lộng hành, lạm dụng |
| 15 | academic | thuộc học viện, ĐH, viện hàn lâm |
| 16 | accent | trọng âm, dấu trọng âm |
| 17 | accept | chấp nhận, chấp thuận |
| 18 | acceptable | có thể chấp nhận, chấp thuận |
| 19 | access | lối, cửa, đường vào |
| 20 | accident | tai nạn, rủi ro. |
| 21 | by accident | tình cờ |
| 22 | accidental | tình cờ, bất ngờ |
| 23 | accidentally | tình cờ, ngẫu nhiên |
| 24 | accommodation | sự thích nghi, sự điều tiết, sự làm cho phù hợp |
| 25 | accompany | đi theo, đi cùng, kèm theo. |
| 26 | according to | theo, y theo |
| 27 | account | tài khoản, kế toán, tính toán, tính đến |
| 28 | accurate | đúng đắn, chính xác, xác đáng |
| 29 | accurately | đúng đắn, chính xác |
| 30 | accuse | tố cáo, buộc tội, kết tội |
| 31 | achieve | đạt được, dành được |
| 32 | achievement | thành tích, thành tựu |
| 33 | acid | axit |
| 34 | acknowledge | công nhận, thừa nhận |
| 35 | acquire | dành được, đạt được, kiếm được |
| 36 | across | qua, ngang qua |
| 37 | act | hành động, hành vi, cử chỉ, đối xử |
| 38 | action | hành động, hành vi, tác động. |
| 39 | Take action | Hãy hành động |
| 40 | active | tích cực hoạt động, nhanh nhẹn |
| 41 | actively | tích cực hoạt động, nhanh nhẹn, linh lợi, có hiệu lực |
| 42 | activity | sự tích cực, sự hoạt động, sự nhanh nhẹn, sự linh lợi |
| 43 | actor | diễn viên nam |
| 44 | actress | diễn viên nữ |
| 45 | actual | thực tế, có thật |
| 46 | actually | hiện nay, hiện tại |
| 47 | adapt | make (something) suitable for a new use or purpose, modify. |
| 48 | add | cộng, thêm vào |
| 49 | addition | tính cộng, phép cộng |
| 50 | additional | thêm vào, tăng thêm |
| 51 | address | địa chỉ, đề địa chỉ |
| 52 | adequate | đầy, đầy đủ |
| 53 | adequately | tương xứng, thỏa đáng |
| 54 | adjust | sửa lại cho đúng, điều chỉnh |
| 55 | admiration | sự khâm phục, thán phục |
| 56 | admire | khâm phục, thán phục |
| 57 | admit | thừa nhận (confess to be true or to be the case, typically with reluctance.), cho vào (allow (someone) to enter a place.) |
| 58 | adopt | nhận làm con nuôi, bố mẹ nuôi |
| 59 | adult | người lớn, người trưởng thành, trưởng thành |
| 60 | advance | sự tiến bộ, tiến lên, đưa lên, đề xuat |
| 61 | advanced | tiên tiến, tiến bộ, cap cao. in advance trước, sớm |
| 62 | advantage | sự thuận lợi, lợi ích, lợi thế. take advantage of lợi dụng |
| 63 | adventure | sự phiêu lưu, mạo hiểm |
| 64 | advertise | báo cho biết, báo cho biết trước |
| 65 | advertisement | quảng cáo |
| 66 | advertising | sự quảng cáo, nghề quảng cáo |
| 67 | advice | lời khuyên, lời chỉ bảo |
| 68 | advise | khuyên, khuyên bảo, răn bảo |
| 69 | affair | việc |
| 70 | affect | làm ảnh hưởng, tác động đến |
| 71 | affection | tình cảm, sự yêu mến |
| 72 | afford | có thể, có đủ khả năng, điều kiện (làm gì) |
| 73 | afraid | sợ, sợ hãi, hoảng sợ |
| 74 | after | sau, đằng sau, sau khi |
| 75 | afternoon | buổi chiều |
| 76 | afterwards | sau này, về sau, rồi thì, sau đây |
| 77 | again | lại, nữa, lần nữa |
| 78 | against | chống lại, phản đối |
| 79 | age | tuổi |
| 80 | aged | già đi |
| 81 | agency | tác dụng, lực, môi giới, trung gian |
| 82 | agent | đại lý, tác nhân |
| 83 | aggressive | xâm lược, hung hăng (US_ xông xáo) |
| 84 | ago | trước đây |
| 85 | agree | đồng ý, tán thành |
| 86 | agreement | sự đồng ý, tán thành, hiệp định, hợp đồng |
| 87 | ahead | trước, về phía trước |
| 88 | aid | sự giúp đỡ, thêm vào, phụ vào |
| 89 | aim | sự nhắm (bắn), mục tiêu, ý định, nhắm, tập trung, hướng vào |
| 90 | air | không khí, bầu không khí, không gian |
| 91 | aircraft | máy bay, khí cầu |
| 92 | airport | sân bay, phi trường |
| 93 | alarm | báo động, báo nguy |
| 94 | alarmed | báo động |
| 95 | alarming | làm lo sợ, làm hốt hoảng, làm sợ hãi |
| 96 | alcohol | rượu cồn |
| 97 | alcoholic | rượu, người nghiện rượu |
| 98 | alive | sống, vẫn còn sống, còn tồn tại |
| 99 | all | tất cả |
| 100 | all right | tốt, ổn, khỏe mạnh, được |
| 101 | allied | liên minh, đồng minh, thông gia |
| 102 | allow | cho phép, để cho |
| 103 | ally | nước đồng minh, liên minh, liên kết, kết thông gia |
| 104 | almost | hầu như, gần như |
| 105 | alone | cô đơn, một mình |
| 106 | along | dọc theo, theo, theo chiều dài, suốt theo |
| 107 | alongside | sát cạnh, kế bên, dọc theo |
| 108 | aloud | lớn tiếng, to tiếng |
| 109 | alphabet | bảng chữ cái, bước đầu, điều cơ bản |
| 110 | alphabetical | thuộc bảng chứ cái |
| 111 | alphabetically | theo thứ tự abc |
| 112 | already | đã, rồi, đã… rồi |
| 113 | also | cũng, cũng vậy, cũng thế |
| 114 | alter | thay đổi, biến đổi, sửa đổi |
| 115 | alternative | sự lựa chọn, lựa chọn |
| 116 | alternatively | như một sự lựa chọn |
| 117 | although | mặc dù, dẫu cho |
| 118 | altogether | hoàn toàn, hầu như, nói chung |
| 119 | always | luôn luôn |
| 120 | amaze | làm ngạc nhiên, làm sửng sốt |
| 121 | amazed | kinh ngạc, sửng sốt |
| 122 | amazing | kinh ngạc, sửng sốt |
| 123 | ambition | hoài bão, khát vọng |
| 124 | ambulance | xe cứu thương, xe cấp cứu |
| 125 | among, amongst | giữa, ở giữa |
| 126 | amount | số lượng, số nhiều, lên tới (money) |
| 127 | amuse | làm cho vui, thích, làm buồn cười |
| 128 | amused | vui thích |
| 129 | amusing | vui thích |
| 130 | analyse, analyze | phân tích |
| 131 | analysis | sự phân tích |
| 132 | and | và |
| 133 | anger | sự tức giận, sự giận dữ |
| 134 | angle | góc |
| 135 | angrily | tức giận, giận dữ |
| 136 | angry | giận, tức giận |
| 137 | animal | động vật, thú vật |
| 138 | ankle | mắt cá chân |
| 139 | anniversary | ngày, lễ kỉ niệm |
| 140 | announce | báo, thông báo |
| 141 | annoy | chọc tức, làm bực mình, làm phiền, quẫy nhiễu |
| 142 | annoyed | bị khó chịu, bực mình, bị quấy rầy |
| 143 | annoying | chọc tức, làm bực mình, làm phiền, quấy nhiễu |
| 144 | annual | hàng năm, từng năm |
| 145 | annually | hàng năm, từng năm |
| 146 | another | khác |
| 147 | answer | sự trả lời, trả lời |
| 148 | anti | chống lại |
| 149 | anticipate | thấy trước, chặn trước, lường trước |
| 150 | anxiety | mối lo âu, sự lo lắng |
| 151 | anxious | lo âu, lo lắng, băn khoăn |
| 152 | anxiously | lo âu, lo lắng, băn khoăn |
| 153 | any | một người, vật nào đó, bất cứ, một chút nào, tí nào |
| 154 | anyone (anybod) | người nào, bất cứ ai |
| 155 | anything | việc gì, vật gì, bất cứ việc gì, vật gì |
| 156 | anyway | thế nào cũng được, dù sấo chăng nữa |
| 157 | anywhere | bất cứ chỗ nào, bất cứ nơi đâu |
| 158 | apart | về một bên, qua một bên |
| 159 | apart from | aside from |
| 160 | apartment | căn phòng, căn buồng |
| 161 | apologize | xin lỗi, tạ lỗi |
| 162 | apparent | rõ ràng, rành mạch, bề ngoài, có vẻ |
| 163 | apparently | nhìn bên ngoài, hình như |
| 164 | appeal | sự kêu gọi, lời kêu gọi, kêu gọi, cầu khẩn |
| 165 | appear | xuất hiện, hiện ra, trình diện |
| 166 | appearance | sự xuất hiện, sự trình diện |
| 167 | apple | quả táo |
| 168 | application | sự gắn vào, vật gắn vào, sự chuyên cần, chuyên tâm |
| 169 | apply | gắn vào, ghép vào, áp dụng vào |
| 170 | appoint | bổ nhiệm, chỉ định, chọn |
| 171 | appointment | sự bổ nhiệm, người được bổ nhiệm, cuộc hẹn có thời gian địa điểm cụ thể |
| 172 | appreciate | thấy rõ, nhận thức |
| 173 | approach | đến gần, lại gần, sự đến gần, sự lại gần |
| 174 | appropriate (to, for) | thích hợp, thích đáng |
| 175 | approval | sự tán thành, đồng ý, sự chấp thuận |
| 176 | approve | tán thành, đồng ý, chấp thuận |
| 177 | approving | tán thành, đồng ý, chấp thuận |
| 178 | approximate | giống với, giống hệt với |
| 179 | approximately | khoảng chừng, độ chừng |
| 180 | April (abbr Apr) | tháng Tư |
| 181 | area | diện tích, bề mặt |
| 182 | argue | chứng tỏ, chỉ rõ |
| 183 | argument | lý lẽ |
| 184 | arise | xuất hiện, nảy ra, nảy sinh ra |
| 185 | arm | cánh tay, vũ trang, trang bị (vũ khí) |
| 186 | armed | vũ trang |
| 187 | arms | vũ khí, binh giới, binh khí |
| 188 | army | quân đội |
| 189 | around | xung quanh, vòng quanh |
| 190 | arrange | sắp xếp, sắp đặt, sửa soạn |
| 191 | arrangement | sự sắp xếp, sắp đặt, sự sửa soạn |
| 192 | arrest | bắt giữ, sự bắt giữ |
| 193 | arrival | sự đến, sự tới nơi |
| 194 | arrive (at, in) | đến, tới nơi |
| 195 | arrow | tên, mũi tên |
| 196 | art | nghệ thuật, mỹ thuật |
| 197 | article | bài báo, đề mục |
| 198 | artificial | nhân tạo |
| 199 | artificially | nhân tạo |
| 200 | artist | nghệ sĩ |
| 201 | artistic | thuộc nghệ thuật, thuộc mỹ thuật |
| 202 | as | như (as you know…) |
| 203 | as well | cũng, cũng như |
| 204 | ashamed | ngượng, xấu hổ |
| 205 | aside | về một bên, sang một bên. |
| 206 | aside from | Besides, unless |
| 207 | ask | hỏi |
| 208 | asleep | ngủ, đang ngủ. fall asleep ngủ thiếp đi |
| 209 | aspect | vẻ bề ngoài, diện mạo |
| 210 | assist | giúp, giúp đỡ, tham dự, có mặt |
| 211 | assistance | sự giúp đỡ |
| 212 | assistant | người giúp đỡ, người phụ tá, giúp đỡ |
| 213 | associate | kết giao, liên kết, kết hợp, cho cộng tác. |
| 214 | associated with | liên kết với |
| 215 | association | sự kết hợp, sự liên kết |
| 216 | assume | mang, khoác, có, lấy (cái vẻ, tính chất…) |
| 217 | assure | đảm bảo, cấm đoán |
| 218 | atmosphere | khí quyển |
| 219 | atom | nguyên tử |
| 220 | attach | gắn, dán, trói, buộc |
| 221 | attached | gắn bó |
| 222 | attack | sự tấn công, sự công kích, tấn công, công kích |
| 223 | attempt | sự cố gắng, sự thử, cố gắng, thử |
| 224 | attempted | cố gắng, thử |
| 225 | attend | dự, có mặt |
| 226 | attention | sự chú ý |
| 227 | attitude | thái độ, quan điểm |
| 228 | attorney | người được ủy quyền |
| 229 | attract | hút, thu hút, hấp dẫn |
| 230 | attraction | sự hút, sức hút |
| 231 | attractive | hút, thu hút, có duyên, lôi cuốn |
| 232 | audience | thính, khan giả |
| 233 | August (abbr Aug) | tháng Tám |
| 234 | aunt | cô, dì |
| 235 | author | tác giả |
| 236 | authority | uy quyền, quyền lực |
| 237 | automatic | tự động |
| 238 | automatically | một cách tự động |
| 239 | autumn | mùa thu |
| 240 | In America, autumn is called... | fall |
| 241 | fall of the leaf | lá rụng |
| 242 | available | có thể dùng được, có giá trị, hiệu lực |
| 243 | average | trung bình, số trung bình, mức trung bình |
| 244 | avoid | tránh, tránh xa |
| 245 | awake | đánh thức, làm thức dậy |
| 246 | award | phần thưởng, tặng, thưởng |
| 247 | aware | biết, nhận thức, nhận thức thấy |
| 248 | away | xa, xa cách, rời xa, đi xa |
| 249 | awful | oai nghiêm, dễ sợ |
| 250 | awfully | tàn khốc, khủng khiếp |
| 251 | awkward | vụng về, lung túng |
| 252 | awkwardly | vụng về, lung túng |
| 253 | back | lưng, sau, về phía sau, trở lại |
| 254 | background | phía sau, nền |
| 255 | backward | về phía sau, lùi lại |
| 256 | backwards | ngược |
| 257 | bacteria | vi khuẩn |
| 258 | bad | xấu, tồi. go bad bẩn thỉu, thối, hỏng |
| 259 | badly | xấu, tồi |
| 260 | bad-tempered | xấu tính, dễ nổi cáu |
| 261 | bag | bao, túi, cặp xách |
| 262 | baggage | hành lý |
| 263 | bake | nung, nướng bằng lò |
| 264 | balance | cái cân, làm cho cân bằng, tương xứng |
| 265 | ball | quả bóng |
| 266 | ban | cấm, cấm chỉ, sự cấm |
| 267 | band | băng, đai, nẹp |
| 268 | bandage | dải băng, băng bó |
| 269 | bank | bờ (sông…) , đê |
| 270 | bar | quán bán rượu |
| 271 | bargain | sự mặc cả, sự giao kèo mua bán |
| 272 | barrier | đặt chướng ngại vật |
| 273 | base | cơ sở, cơ bản, nền móng, đặt tên, đặt cơ sở trên cái gì. based on dựa trên |
| 274 | basic | cơ bản, cơ sở |
| 275 | basically | cơ bản, về cơ bản |
| 276 | basis | nền tảng, cơ sở |
| 277 | bath | sự tắm |
| 278 | bathroom | buồng tắm, nhà vệ sinh |
| 279 | battery | pin, ắc quy |
| 280 | battle | trận đánh, chiến thuật |
| 281 | bay | gian (nhà), nhịp (cầu), chuồng (ngựa), |
| 282 | bays | vòng nguyệt quế, vịnh |
| 283 | be sick | bị ốm |
| 284 | beach | bãi biển |
| 285 | beak | mỏ chim |
| 286 | bear | mang, cầm, vác, đeo, ôm |
| 287 | beard | râu |
| 288 | beat | tiếng đập, sự đập, đánh đập, đấm |
| 289 | beautiful | đẹp |
| 290 | beautifully | tốt đẹp, đáng hài lòng |
| 291 | beauty | vẻ đẹp, cái đẹp, người đẹp |
| 292 | because | bởi vì, vì. because of prep. vì, do bởi |
| 293 | become | trở thành, trở nên |
| 294 | bed | cái giường |
| 295 | bedroom | phòng ngủ |
| 296 | beef | thịt bò |
| 297 | beer | rượu bia |
| 298 | before | trước, đằng trước |
| 299 | begin | bắt đầu, khởi đầu |
| 300 | beginning | phần đầu, lúc bắt đầu, lúc khởi đầu |
| 301 | behalf | sự thay mặt. on behalf of sb thay mặt cho ai, nhân danh ai |
| 302 | behalf, on sb’s behalf | nhân danh cá nhân ai |
| 303 | behave | đối xử, ăn ở, cư xử |
| 304 | behaviour, behavior | thái độ, cách đối xử, cách cư xử, cách ăn ở, tư cách đạo đức |
| 305 | behind | sau, ở đằng sau |
| 306 | belief | lòng tin, đức tin, sự tin tưởng |
| 307 | believe | tin, tin tưởng |
| 308 | bell | cái chuông, tiếng chuông |
| 309 | belong | thuộc về, của, thuộc quyền sở hữu |
| 310 | below | ở dưới, dưới thấp, phía dưới |
| 311 | belt | dây lưng, thắt lưng |
| 312 | bend | chỗ rẽ, chỗ uốn, khuỷu tay, cúi xuống, uốn cong |
| 313 | beneath | ở dưới, dưới thấp |
| 314 | benefit | lợi, lợi ích, giúp ích, làm lợi cho |
| 315 | bent | khiếu, sở thích, khuynh hướng |
| 316 | beside | bên cạnh, so với |
| 317 | bet | đánh cuộc, cá cược, sự đánh cuộc |
| 318 | better, best | tốt hơn, tốt nhất |
| 319 | betting | sự đánh cuộc |
| 320 | between | giữa, ở giữa |
| 321 | beyond | ở xa, phía bên kia |
| 322 | bicycle (bike) | xe đạp |
| 323 | bid | đặt giá, trả giá, sự đặt giá, sự trả giá |
| 324 | big | to, lớn |
| 325 | bill | hóa đơn, giấy bạc |
| 326 | bin | thùng, thùng đựng rượu |
| 327 | biology | sinh vật học |
| 328 | bird | chim |
| 329 | birth | sự ra đời, sự sinh đẻ |
| 330 | birthday | ngày sinh, sinh nhật |
| 331 | biscuit | bánh quy |
| 332 | bit | miếng, mảnh. a bit một chút, một |
| 333 | bite | cắn, ngoạm, sự cắn, sự ngoạm |
| 334 | bitterly | đắng, đắng cay, chua xót |
| 335 | black | đen, màu đen |
| 336 | blade | lưỡi (dao, kiếm), lá (cỏ, cây), mái (chèo), cánh (chong chóng) |
| 337 | blame | khiển trách, mắng trách, sự khiển trách, sự mắng trách |
| 338 | blank | trống, để trắng, sự trống rỗng |
| 339 | blankly | ngây ra, không có thần |
| 340 | blind | đui, mù |
| 341 | block | khối, tảng (đá), làm ngăn cản, ngăn chặn |
| 342 | blonde (blond) | hoe vàng, mái tóc hoe vàng |
| 343 | blood | máu, huyết, sự tàn sát, chem giết |
| 344 | blow | nở hoa, sự nở hoa |
| 345 | blue | xanh, màu xanh |
| 346 | board | tấm ván, lát ván, lót ván. on board trên tàu thủy |
| 347 | boat | tàu, thuyền |
| 348 | body | thân thể, thân xác |
| 349 | boil | sôi, luộc |
| 350 | bomb | quả bom, oánh bom, thả bom |
| 351 | bone | xương |
| 352 | book | sách, ghi chép |
| 353 | boot | giày ống |
| 354 | border | bờ, mép, vỉa, lề (đường) |
| 355 | bore | buồn chán, buồn tẻ |
| 356 | bored | buồn chán |
| 357 | boring | buồn chán |
| 358 | born ( be born) | sinh, đẻ |
| 359 | borrow | vay, mượn |
| 360 | boss | ông chủ, thủ trưởng |
| 361 | both | cả hai |
| 362 | bother | làm phiền, quấy rầy, làm bực mình |
| 363 | bottle | chai, lọ |
| 364 | bottom | phần dưới cùng, thấp nhất, cuối, cuối cùng |
| 365 | bound (bound to) | nhất định, chắc chắn |
| 366 | bowl | cái bát |
| 367 | box | hộp, thùng |
| 368 | boy | con trai, thiếu niên |
| 369 | boyfriend | bạn trai |
| 370 | brain | óc não, đầu óc, trí não |
| 371 | branch | ngành, nhành cây, nhánh song, ngả đường |
| 372 | brand | nhãn (hàng hóa) |
| 373 | brave | gan dạ, can đảm |
| 374 | bread | bánh mỳ |
| 375 | break | bẻ gẫy, đập vỡ, sự gãy, sự vỡ |
| 376 | breakfast | bữa điểm tâm, bữa sáng |
| 377 | breast | ngực, vú |
| 378 | breath | hơi thở, hơi |
| 379 | breathe | hít, thở |
| 380 | breathing | sự hô hấp, sự thở |
| 381 | breed | nuôi dưỡng, chăm sóc, giáo dục, sinh đẻ, nòi giống |
| 382 | brick | gạch |
| 383 | bridge | cái cầu |
| 384 | brief | ngắn, gọn, vắn tắt |
| 385 | briefly | ngắn, gọn, vắn tắt, tóm tắt |
| 386 | bright | sáng, sáng chói |
| 387 | brightly | sáng chói, tươi |
| 388 | brilliant | tỏa sáng, rực rỡ, chói lọi |
| 389 | bring | mang, cầm , xách lại |
| 390 | broad | rộng |
| 391 | broadcast | tung ra khắp nơi,truyền rộng rãi, phát thanh, quảng bá |
| 392 | broadly | rộng, rộng rãi |
| 393 | broken | bị gãy, bị vỡ |
| 394 | brother | anh, em trai |
| 395 | brown | nâu, màu nâu |
| 396 | brush | bàn chải, chải, quét |
| 397 | bubble | bong bóng, bọt, tăm |
| 398 | budget | ngân sách |
| 399 | build | xây dựng |
| 400 | building | sự xây dựng, công trình xây dựng tòa nhà |
| 401 | bullet | đạn (súng trường, súng lục) |
| 402 | bunch | búi, chùm, bó, cụm, buồng, bầy, đàn |
| 403 | burn | đốt, đốt cháy, thắp, nung, thiêu |
| 404 | burnt | bị đốt, bị cháy, khê, rám nắng, sạm (da) |
| 405 | burst | nổ, nổ tung (bom, đạn), nổ, vỡ (bong bóng), háo hức |
| 406 | bury | chôn cất, mai táng |
| 407 | bus | xe buýt |
| 408 | bush | bụi cây, bụi rậm |
| 409 | business | việc buôn bán, thương mại, kinh doanh |
| 410 | businessman, businesswoman | thương nhân |
| 411 | busy | bận, bận rộn |
| 412 | but | nhưng |
| 413 | butter | bơ |
| 414 | button | cái nút, cái khuy, cúc |
| 415 | buy | mua |
| 416 | buyer | người mua |
| 417 | by | bởi, bằng |
| 418 | bye | tạm biệt |
| 419 | cabinet | tủ có nhiều ngăn đựng đồ |
| 420 | cable | dây cáp |
| 421 | cake | bánh ngọt |
| 422 | calculate | tính toán |
| 423 | calculation | sự tính toán |
| 424 | call | gọi, tiếng kêu, tiếng gọi. |
| 425 | be called | được gọi, bị gọi |
| 426 | calm | yên lặng, làm dịu đi, sự yên lặng, sự êm ả |
| 427 | calmly | yên lặng, êm ả, bình tĩnh, điềm tĩnh |
| 428 | camera | máy ảnh |
| 429 | camp | trại, chỗ cắm trại, cắm trại, hạ trại |
| 430 | campaign | chiến dịch, cuộc vận động |
| 431 | camping | sự cắm trại |
| 432 | can | có thể, nhà tù, nhà giam, bình, ca đựng. cannot không thể |
| 433 | cancel | hủy bỏ, xóa bỏ |
| 434 | cancer | bệnh ung thư |
| 435 | candidate | người ứng cử, thí sinh, người dự thi |
| 436 | candy | kẹo |
| 437 | cap | mũ lưỡi trai, mũ vải |
| 438 | capable | có tài, có năng lực, có khả năng, cả gan |
| 439 | capacity | năng lực, khả năng tiếp thu, năng suất |
| 440 | capital | thủ đô, tiền vốn, chủ yếu, chính yếu, cơ bản |
| 441 | captain | người cầm đầu, người chỉ huy, th lĩnh |
| 442 | capture | bắt giữ, bắt, sự bắt giữ, sự bị bắt |
| 443 | car | xe hơi |
| 444 | card | thẻ, thiếp |
| 445 | cardboard | bìa cứng, các tông |
| 446 | care | sự chăm sóc, chăm nom, chăm sóc |
| 447 | career | nghề nghiệp, sự nghiệp |
| 448 | careful | cẩn thận, cẩn trọng, biết giữ gìn |
| 449 | carefully | cẩn thận, chu đáo |
| 450 | careless | sơ suất, cầu thả |
| 451 | carelessly | cẩu thả, bất cẩn |
| 452 | carpet | tấm thảm, thảm (cỏ) |
| 453 | carrot | củ cà rốt |
| 454 | carry | mang, vác, khuân chở |
| 455 | case | vỏ, ngăn, túi,trường hợp, cảnh ngộ, hoàn cảnh, tình thế |
| 456 | cash | tiền, tiền mặt |
| 457 | cast | quăng, ném, thả, đánh gục, sự quăng, sự ném (lưới), sự thả(neo) |
| 458 | castle | thành trì, thành quách |
| 459 | cat | con mèo |
| 460 | catch | bắt lấy, nắm lấy, tóm lấy, chộp lấy |
| 461 | category | hạng, loại, phạm trù |
| 462 | cause | nguyên nhân, nguyên do, gây ra, gây nên |
| 463 | CD | đĩa CD |
| 464 | cease | dừng, ngưng, ngớt, thôi, hết, tạnh |
| 465 | ceiling | trần nhà |
| 466 | celebrate | kỷ niệm, làm lễ kỷ niệm, tán dương, ca tụng |
| 467 | celebration | sự kỷ niệm, lễ kỷ niệm, sự tán dương, sự ca tụng |
| 468 | cell | ô, ngăn |
| 469 | cellphone, cellular phone | điện thoại di động |
| 470 | cent | đồng xu (bằng 1/100 đô la) |
| 471 | centimetre | xen ti mét |
| 472 | centimetre, centimeter | xen ti met |
| 473 | central | trung tâm, ở giữa, trung ương |
| 474 | centre | điểm giữa, trung tâm, trung ương |
| 475 | century | thế kỷ |
| 476 | ceremony | nghi thức, nghi lễ |
| 477 | certain | chắc chắn |
| 478 | certainly | chắc chắn, nhất định |
| 479 | certificate | giấy chứng nhận, bằng, chứng ch |
| 480 | chain | dây, xích, xính lại, trói lại |
| 481 | chair | ghế |
| 482 | chairman, chairwoman | chủ tịch, chủ tọa |
| 483 | challenge | sự thử thách, sự thách thức, thác thức, thử thách |
| 484 | chamber | buồng, phòng, buồng ngủ |
| 485 | chance | sự may rủi, sự tình cờ, ngẫu nhiên |
| 486 | change | thấy đổi, sự thấy đổi, sự biến đổi |
| 487 | channel | kênh (TV, radio), eo biển |
| 488 | chapter | chương (sách) |
| 489 | character | tính cách, đặc tính, nhân vật |
| 490 | characteristic | riêng, riêng biệt, đặc trưng, đặc tính, đặc điểm |
| 491 | charge | nhiệm vụ, bổn phận, trách nhiệm, giao nhiệm vụ, giao việc. |
| 492 | in charg of | phụ trách |
| 493 | charity | lòng tư thiện, lòng nhân đức, sự bố thí |
| 494 | chart | đồ thị, biểu đồ, vẽ đồ thị, lập biểu đồ |
| 495 | chase | săn bắt, sự săn bắt |
| 496 | chat | nói chuyện, tán gẫu, chuyện phiếm, chuyện gẫu |
| 497 | cheap | rẻ |
| 498 | cheaply | rẻ, rẻ tiền |
| 499 | cheat | lưa, lưa đảo, trò lưa đảo, trò gian lận |
| 500 | check | kiểm tra, sự kiểm tra |
| 501 | cheek | má |
| 502 | cheerful | vui mưng, phấn khởi, hồ hởi |
| 503 | cheerfully | vui vẻ, phấn khởi |
| 504 | cheese | pho mát |
| 505 | chemical | thuộc hóa học, chất hóa học, hóa chất |
| 506 | chemist | nhà hóa học |
| 507 | chemist’s | nhà hóa học |
| 508 | chemistry | hóa học, môn hóa học, ngành hóa học |
| 509 | cheque | séc |
| 510 | chest | tủ, rương, hòm |
| 511 | chew | nhai, ngẫm nghĩ |
| 512 | chicken | gà, gà con, thịt gà |
| 513 | chief | trọng yếu, chính yếu, thủ lĩnh, lãnh tụ, người đứng đầu, xếp |
| 514 | child | đứa bé, đứa trẻ |
| 515 | chin | cằm |
| 516 | chip | vỏ bào, mảnh vỡ, chỗ sứt, mẻ |
| 517 | chocolate | sô cô la |
| 518 | choice | sự lựa chọn |
| 519 | choose | chọn, lựa chọn |
| 520 | chop | chặt, đốn, chẻ |
| 521 | cigarette | điếu thuốc lá |
| 522 | cinema | rạp xi nê, rạp chiếu bóng |
| 523 | circle | đường tròn, hình tròn |
| 524 | circumstance | hoàn cảnh, trường hợp, tình huống |
| 525 | citizen | người thành thị |
| 526 | city | thành phố |
| 527 | civil | (thuộc) công dân |
| 528 | claim | đòi hỏi, yêu sách, sự đòi hỏi, sự yêu sách, sự thỉnh cầu |
| 529 | clap | vỗ, vỗ tay, tiếng nổ, tiếng vỗ tay |
| 530 | class | lớp học |
| 531 | classic | cổ điển, kinh điển |
| 532 | classroom | lớp học, phòng học |
| 533 | clean | sạch, sạch sẽ, |
| 534 | clear | lau chùi, quét dọn |
| 535 | clearly | rõ ràng, sáng sủa |
| 536 | clerk | thư ký, linh mục, mục sư |
| 537 | clever | lanh lợi, thông minh. tài giỏi, khéo léo |
| 538 | click | làm thành tiếng lách cách, tiếng lách cách, cú nhắp (chuột) |
| 539 | client | khách hàng |
| 540 | climate | khí hậu, thời tiết |
| 541 | climb | leo, trèo |
| 542 | climbing | sự leo trèo |
| 543 | clock | đồng hồ |
| 544 | close | đóng kín, chật chội, che đậy |
| 545 | closed | bảo thủ, không cởi mở, khép kín |
| 546 | closely | chặt chẽ, kỹ lưỡng, tỉ mỉ |
| 547 | closet | buồng, phòng để đồ, phòng kho |
| 548 | cloth | vải, khăn trải bàn, áo thầy tu |
| 549 | clothes | quần áo |
| 550 | clothing | quần áo, y phục |
| 551 | cloud | mây, đám mây |
| 552 | club | câu lạc bộ, gậy, dùi cui |
| 553 | coach | huấn luyện viên |
| 554 | coal | than đá |
| 555 | coast | sự lao dốc, bờ biển |
| 556 | coat | áo choàng |
| 557 | code | mật mã, luật, điều lệ |
| 558 | coffee | cà phê |
| 559 | coin | tiền kim loại |
| 560 | cold | lạnh, sự lạnh lẽo, lạnh nhạt |
| 561 | coldly | lạnh nhạt, hờ hững, vô tâm |
| 562 | collapse | đổ, sụp đổ, sự đổ nát, sự sụp đổ |
| 563 | colleague | bạn đồng nghiệp |
| 564 | collect | sưu tập, tập trung lại |
| 565 | collection | sự sưu tập, sự tụ họp |
| 566 | color, colour | màu sắc, tô màu |
| 567 | coloured | mang màu sắc, có màu sắc |
| 568 | column | cột , mục (báo) |
| 569 | combination | sự kết hợp, sự phối hợp |
| 570 | combine | kết hợp, phối hợp |
| 571 | come | đến, tới, đi đến, đi tới |
| 572 | comedy | hài kịch, Phim hài |
| 573 | comfort | sự an ủi, khuyên giải, lời động viên, sự an nhàn, dỗ dành, an ủi |
| 574 | comfortable | thoải mái, tiện nghi, đầy đủ |
| 575 | comfortably | dễ chịu, thoải mái, tiện nghi, ấm cúng |
| 576 | command | ra lệnh, chỉ huy, lệnh, mệnh lệnh, quyền ra lệnh, quyền chỉ huy |
| 577 | comment | lời bình luận, lời chú giải, bình luận, phê bình, chú thích, dẫn giải |
| 578 | commercial | buôn bán, thương mại |
| 579 | commission | hội đồng, ủy ban, sự ủy nhiệm, sự ủy thác, ủy nhiệm, ủy thác |
| 580 | commit | giao, gửi, ủy nhiệm, ủy thác, tống giam, bỏ tù |
| 581 | commitment | sự phạm tội, sự tận tụy, tận tâm |
| 582 | committee | ủy ban |
| 583 | common | công, công cộng, thông thường, phổ biến. |
| 584 | in common | sự chung, của chung |
| 585 | commonly | thông thường, bình thường |
| 586 | communicate | truyền, truyền đạt, giao thiệp, liên lạc |
| 587 | communication | sự giao tiếp, liên lạc, sự truyền đạt, truyền tin |
| 588 | community | dân chúng, nhân dân |
| 589 | company | công ty |
| 590 | compare | so sánh, đối chiếu |
| 591 | comparison | sự so sánh |
| 592 | compete | đua tranh, ganh đua, cạnh tranh |
| 593 | competition | sự cạnh tranh, cuộc thi, cuộc thi đau |
| 594 | competitive | cạnh tranh, đua tranh |
| 595 | complain | phàn nàn, kêu ca |
| 596 | complaint | lời than phiền, than thở, sự khiếu nại, đơn kiện |
| 597 | complete | hoàn thành, xong, |
| 598 | completely | hoàn thành, đầy đủ, trọn vẹn |
| 599 | complex | phức tạp, rắc rối |
| 600 | complicate | làm phức tạp, rắc rối |
| 601 | complicated | phức tạp, rắc rối |
| 602 | computer | máy tính |
| 603 | concentrate | tập trung |
| 604 | concentration | sự tập trung, nơi tập trung |
| 605 | concept | khái niệm |
| 606 | concern | liên quan, dính líu tới, sự liên quan, sự dính líu tới |
| 607 | concerned | có liên quan, có dính líu |
| 608 | concerning | có liên quan, dính líu tới |
| 609 | concert | buổi hòa nhạc |
| 610 | conclude | kết luận, kết thúc, chấm dứt (công việc) |
| 611 | conclusion | sự kết thúc, sự kết luận, phần kết luận |
| 612 | concrete | bằng bê tông, bê tông |
| 613 | condition | điều kiện, tình cảnh, tình thế |
| 614 | conduct | điều khiển, chỉ đạo, chỉ huy, sự điều khiển, chỉ huy |
| 615 | conference | hội nghị, sự bàn bạc |
| 616 | confidence | lòng tin tưởng, sự tin cậy |
| 617 | confident | tin tưởng, tin cậy, tự tin |
| 618 | confidently | tự tin |
| 619 | confine | giam giữ, hạn chế |
| 620 | confined | hạn chế, giới hạn |
| 621 | confirm | xác nhận, chứng thực |
| 622 | conflict | xung đột, va chạm, sự xung đột, sự va chạm |
| 623 | confront | đối mặt, đối diện, đối chiếu |
| 624 | confuse | làm lộn xộn, xáo trộn |
| 625 | confused | bối rối, lúng túng, ngượng |
| 626 | confusing | khó hiểu, gây bối rối |
| 627 | confusion | sự lộn xộn, sự rối loạn |
| 628 | congratulations | sự chúc mưng, khen ngợi, lời chúc mưng, khen ngợi (s) |
| 629 | congress | đại hội, hội nghị, Quốc hội |
| 630 | connect | kết nối, nối |
| 631 | connection | sự kết nối, sự giao kết |
| 632 | conscious | tỉnh táo, có ý thức, biết rõ |
| 633 | consequence | kết quả, hậu quả |
| 634 | conservative | thận trọng, dè dặt, bảo thủ |
| 635 | consider | cân nhắc, xem xét, để ý, quan tâm, lưu ý đến |
| 636 | considerable | lớn lao, to tát, đáng kể |
| 637 | considerably | đáng kể, lớn lao, nhiều |
| 638 | consideration | sự cân nhắc, sự xem xét, sự để ý sự quan tâm |
| 639 | consist of | gồm có |
| 640 | constant | kiên trì, bền lòng |
| 641 | constantly | kiên định |
| 642 | construct | xây dựng |
| 643 | construction | sự xây dựng |
| 644 | consult | tra cứu, tham khảo, thăm dò, hỏi kiến |
| 645 | consumer | người tiêu dùng |
| 646 | contact | sự liên lạc, sự giao thiệp, tiếp xúc |
| 647 | contain | bao hàm, chứa đựng, bao gồm |
| 648 | container | cái đựng, chứa, công te nơ |
| 649 | contemporary | đương thời, đương đại |
| 650 | content | nội dung, sự hài lòng |
| 651 | contest | cuộc thi, trận đấu, cuộc tranh luận cuộc chiến đấu, chiến tranh |
| 652 | context | văn cảnh, khung cảnh, phạm vi |
| 653 | continent | lục địa, đại lục (lục địa Bắc Mỹ) |
| 654 | continue | tiếp tục, làm tiếp |
| 655 | continuous | liên tục, liên tiếp |
| 656 | continuously | liên tục, liên tiếp |
| 657 | contract | hợp đồng, sự ký hợp đồng, ký kết |
| 658 | contrast | sự tương phản, làm tương phản, làm trái ngược |
| 659 | contrasting | tương phản |
| 660 | contribute | đóng góp, ghóp phần |
| 661 | contribution | sự đóng góp, sự góp phần |
| 662 | control | sự điều khiển, quyền hành, quyền lực, quyền chỉ huy |
| 663 | controlled | được điều khiển, được kiểm tra |
| 664 | convenient | tiện lợi, thuận lợi, thích hợp |
| 665 | convention | hội nghị, hiệp định, quy ước |
| 666 | conventional | quy ước |
| 667 | conversation | cuộc đàm thoại, cuộc trò chuyện |
| 668 | convert | đổi, biến đổi |
| 669 | convince | làm cho tin, thuyết phục, làm cho nhận thức thấy |
| 670 | cook | nấu ăn, người nấu ăn |
| 671 | cooker | lò, bếp, nồi nấu |
| 672 | cookie | bánh quy |
| 673 | cooking | sự nấu ăn, cách nấu ăn |
| 674 | cool | mát mẻ, điềm tĩnh, làm mát, |
| 675 | cope (+ with) | đối phó, đương đầu |
| 676 | copy | bản sao, bản chép lại, sự sao chép, sao chép, bắt chước |
| 677 | core | nòng cốt, hạt nhân, đáy lòng |
| 678 | corner | góc (tường, nhà, phố...) |
| 679 | correct | đúng, chính xác, sửa, sửa chữa |
| 680 | correctly | đúng, chính xác |
| 681 | cost | giá, chi phí, trả giá, phải trả |
| 682 | cottage | nhà tranh |
| 683 | cotton | bông, chỉ, sợi |
| 684 | cough | ho, sự ho, tiếng hoa |
| 685 | coughing | ho |
| 686 | could | có thể |
| 687 | council | hội đồng |
| 688 | count | đếm, tính |
| 689 | counter | quầy hàng, quầy thu tiền, máy đếm |
| 690 | country | nước, quốc gia, đất nước |
| 691 | countryside | miền quê, miền nông thôn |
| 692 | county | hạt, tỉnh |
| 693 | couple | đôi, cặp, đôi vợ chồng, cặp nam nữ. a couple một cặp, một đôi |
| 694 | courage | sự can đảm, sự dũng cảm, dũng khí |
| 695 | course | tiến trình, quá trình diễn tiến, sân chạy đua. of course dĩ nhiên, loạt, khoá, đợt, lớp |
| 696 | court | sân, sân (tennis...), tòa án, quan tòa, phiên tòa |
| 697 | cousin | anh em họ |
| 698 | cover | bao bọc, che phủ, vỏ, vỏ bọc |
| 699 | covered | có mái che, kín đáo |
| 700 | covering | sự bao bọc, sự che phủ, cái bao, bọc |
| 701 | cow | con bò cái |
| 702 | crack | cừ, xuất sắc, làm nứt, làm vỡ, nứt nẻ, rạn nứt |
| 703 | cracked | rạn, nứt |
| 704 | craft | nghề, nghề thủ công |
| 705 | crash | vải thô, sự rơi (máy bấy), sự phá sản, sụp đổ, phá tan tành, phá vụ |
| 706 | crazy | điên, mất trí |
| 707 | cream | kem |
| 708 | create | sáng tạo, tạo nên |
| 709 | creature | sinh vật, loài vật |
| 710 | credit | sự tin, lòng tin, danh tiếng, tiền gử ngân hàng |
| 711 | credit card | thẻ tín dụng |
| 712 | crime | tội, tội ác, tội phạm |
| 713 | criminal | có tội, phạm tội, kẻ phạm tội, tội phạm |
| 714 | crisis | sự khủng hoảng, cơn khủng hoảng |
| 715 | crisp | giòn |
| 716 | criterion | tiêu chuẩn |
| 717 | critical | phê bình, phê phán, khó tính |
| 718 | criticism | sự phê bình, sự phê phán, lời phê bình, lời phê phán |
| 719 | criticize | phê bình, phê phán, chỉ trích |
| 720 | crop | vụ mùa |
| 721 | cross | cây Thánh Giá, nỗi thống khổ, sự băng qua, băng qua, vượt qua |
| 722 | crowd | đám đông |
| 723 | crowded | đông đúc |
| 724 | crown | vương miện, vua, ngai vàng, đỉnh cao nhất |
| 725 | crucial | quyết định, cốt yếu, chủ yếu |
| 726 | cruel | độc ác, dữ tợn, tàn nhẫn |
| 727 | crush | ép, vắt, đè nát, đè bẹp |
| 728 | cry | khóc, kêu la, sự khóc, tiếng khóc, sự kêu la |
| 729 | cultural | (thuộc) văn hóa |
| 730 | culture | văn hóa, sự mở mang, sự giáo dục |
| 731 | cup | tách, chén |
| 732 | cupboard | 1 loại tủ có ngăn |
| 733 | curb | kiềm chế, nén lại, hạn chế |
| 734 | cure | chữa trị, điều trị, cách chữa bệnh, cách điều trị, thuốc |
| 735 | curious | ham muốn, tò mò, lạ lùng |
| 736 | curiously | tò mò, hiếu kỳ, lạ kỳ |
| 737 | curl | quăn, xoắn, uốn quăn, làm xoắn, sự uốn quăn |
| 738 | curly | quăn, xoắn |
| 739 | current | hiện hành, phổ biến, hiện nấy, dòng (nước), luống (gió) |
| 740 | currently | hiện thời, hiện nay |
| 741 | curtain | màn (cửa, rạp hát, khói, sương) |
| 742 | curve | đường cong, đường vòng, cong, uốn cong, bẻ cong |
| 743 | curved | cong |
| 744 | custom | phong tục, tục lệ, thói quen, tập quán |
| 745 | customer | khách hàng |
| 746 | customs | thuế nhập khẩu, hải quan |
| 747 | cut | cắt, chặt, sự cắt |
| 748 | cycle | chu kỳ, chu trình, vòng, quay vòng theo chu kỳ, đi xe đạp |
| 749 | cycling | sự đi xe đạp |
| 750 | dad | bố, cha |
| 751 | daily | hàng ngày |
| 752 | damage | mối hạn, điều hại, sự thiệt hại, làm hư hại, làm hỏng, gây thiệt hại |
| 753 | damp | ẩm, ẩm ướt, ẩm thấp |
| 754 | dance | sự nhảy múa, sự khiêu vũ, nhảy múa, khiêu vũ |
| 755 | dancer | diễn viên múa, người nhảy múa |
| 756 | dancing | sự nhảy múa, sự khiêu vũ |
| 757 | danger | sự nguy hiểm, mối hiểm nghèo, nguy cơ, mối đe dọa |
| 758 | dangerous | nguy hiểm |
| 759 | dare | dám, dám đương đầu với, thách |
| 760 | dark | tối, tối tăm, bóng tối, ám muội |
| 761 | data | số liệu, dữ liệu |
| 762 | date | ngày, kỳ, kỳ hạn, thời kỳ, thời đại, đề ngày tháng, ghi niên hiệu |
| 763 | daughter | con gái |
| 764 | day | ngày, ban ngày |
| 765 | dead | chết, tắt |
| 766 | deaf | điếc, làm thinh, làm ngơ |
| 767 | deal | phân phát, phân phối, sự giao dịch, thỏa thuận mua bán. |
| 768 | deal with | giải quyết |
| 769 | dear | thân, thân yêu, thân mến, kính thưa, thưa |
| 770 | death | sự chết, cái chết |
| 771 | debate | cuộc tranh luận, cuộc tranh cãi, tranh luận, bàn cãi |
| 772 | debt | nợ |
| 773 | decade | thập kỷ, bộ mười, nhóm mười |
| 774 | decay | tình trạng suy tàn, suy sụp, tình trạng đổ nát |
| 775 | December (abbr Dec) | tháng mười hai, tháng Chạp |
| 776 | decide | quyết định, giải quyết, phân xử |
| 777 | decision | sự quyết định, sự giải quyết, sự phân xử |
| 778 | declare | tuyên bố, công bố |
| 779 | decline | sự suy tàn, sự suy sụp, suy sụp, suy tàn |
| 780 | decorate | trang hoàng, trang trí |
| 781 | decoration | sự trang hoàng, đồ trang hoàng, trang trí |
| 782 | decorative | để trang hoàng, để trang trí, để làm cảnh |
| 783 | decrease | giảm bớt, làm suy giảm, sự giảm đi, sự giảm sút |
| 784 | deep | sâu, khó lường, bí ẩn |
| 785 | deeply | sâu, sâu xa, sâu sắc |
| 786 | defeat | đánh thắng, đánh bại, sự thất bại (1 kế hoạch), sự tiêu tan(hyvọng..) |
| 787 | defence | cái để bảo vệ, vật để chống đỡ, sự che chở |
| 788 | defend | che chở, bảo vệ, bào chữa |
| 789 | define | định nghĩa |
| 790 | definite | xác định, định rõ, rõ ràng |
| 791 | definitely | rạch ròi, dứt khoát |
| 792 | definition | sự định nghĩa, lời định nghĩa |
| 793 | degree | mức độ, trình độ, bằng cấp, độ |
| 794 | delay | sự chậm trễ, sự trì hoãn, sự cản trở, làm chậm trễ |
| 795 | deliberate | thận trọng, có tính toán, chủ tâm, có suy nghĩ cân nhắc |
| 796 | deliberately | thận trọng, có suy nghĩ cân nhắc |
| 797 | delicate | thanh nhã, thanh tú, tế nhị, khó xử |
| 798 | delight | sự vui thích, sự vui sướng, điều thích thú, làm vui thích, làm saymê |
| 799 | delighted | vui mừng, hài lòng |
| 800 | deliver | cứu khỏi, thoát khỏi, bày tỏ, giãi bày |
| 801 | delivery | sự phân phát, sự phân phối, sự giao hàng, sự bày tỏ, phát biếu |
| 802 | demand | sự đòi hỏi, sự yêu cầu, đòi hỏi, yêu cầu |
| 803 | demonstrate | chứng minh, giải thích, bày tỏ, biểu lộ |
| 804 | dentist | nha sĩ |
| 805 | deny | từ chối, phản đối, phủ nhận |
| 806 | department | cục, sở, ty, ban, khoa, gian hàng, khu bày hàng |
| 807 | departure | sự rời khỏi, sự đi, sự khởi hành |
| 808 | depend | phụ thuộc, tùy thuộc, dựa vào, ỷ vào, trông mong vào |
| 809 | deposit | vật gửi, tiền gửi, tiền đặt cọc, gửi, đặt cọc |
| 810 | depress | làm chán nản, làm phiền muộn, làm suy giảm |
| 811 | depressed | chán nản, thất vọng, phiền muộn, suy yếu, đình trệ |
| 812 | depressing | làm chán nản làm thát vọng, làm trì trệ |
| 813 | depth | chiều sâu, độ dày |
| 814 | derive | nhận được từ, lấy được từ, xuất phát từ, bắt nguồn, chuyển hóa từ (from) |
| 815 | describe | diễn tả, miêu tả, mô tả |
| 816 | description | sự mô tả, sự tả, sự miêu tả |
| 817 | desert | sa mạc, công lao, giá trị, rời bỏ, b trốn |
| 818 | deserted | hoang vắng, không người ở |
| 819 | deserve | đáng, xứng đáng |
| 820 | design | sự thiết kế, kế hoạch, đề cương. phác thảo, phác họa, thiết kế |
| 821 | desire | ước muốn, thèm muốn, ao ước |
| 822 | desk | bàn (học sinh, viết, làm việc) |
| 823 | desperate | liều mạng, liều lĩnh, tuyệt vọng |
| 824 | desperately | liều lĩnh, liều mạng |
| 825 | despite | dù, mặc dù, bất chấp |
| 826 | destroy | phá, phá hoại, phá huỷ, tiêu diệt, triệt phá |
| 827 | destruction | sự phá hoại, sự phá hủy, sự tiêu diệt |
| 828 | detail | chi tiết. |
| 829 | in detail | tường tận, tỉ mỉ |
| 830 | detailed | cặn kẽ, tỉ mỉ, nhiều chi tiết |
| 831 | determination | sự xác định, sự định rõ, sự quyết định |
| 832 | determine | xác định, định rõ, quyết định |
| 833 | determined | đã được xác định, đã được xác định rõ |
| 834 | develop | phát triển, mở rộng, trình bày, bày tỏ |
| 835 | development | sự phát triển, sự trình bày, sự bày tỏ |
| 836 | device | kế sách, thiết bị, dụng cụ, máy móc |
| 837 | devote | hiến dâng, dành hết cho |
| 838 | devoted | hiến cho, dâng cho, dành cho, hết lòng, nhiệt tình |
| 839 | diagram | biểu đồ |
| 840 | diamond | kim cương |
| 841 | diary | sổ nhật ký, lịch ghi nhớ |
| 842 | dictionary | từ điển |
| 843 | die | chết, tư trần, hy sinh |
| 844 | diet | chế độ ăn uống, chế độ ăn kiêng |
| 845 | difference | sự khác nhau |
| 846 | different | khác, khác biệt, khác nhau |
| 847 | differently | khác, khác biệt, khác nhau |
| 848 | difficult | khó, khó khăn, gấy go |
| 849 | difficulty | sự khó khăn, nỗi khó khăn, điều cản trở |
| 850 | dig | đào bới, xới |
| 851 | dinner | bữa trưa, chiều |
| 852 | direct | trực tiếp, thẳng, thẳng thắn, gửi, viết cho ai, điều khiển |
| 853 | direction | sự điều khiển, sự chỉ huy |
| 854 | directly | trực tiếp, thẳng |
| 855 | director | giám đốc, người điều khiển, chỉ huy |
| 856 | dirt | đồ bẩn thỉu, đồ dơ bẩn, vật rác rưởi |
| 857 | dirty | bẩn thỉu, dơ bẩn |
| 858 | disabled | bất lực, không có khả năng |
| 859 | disadvantage | sự bất lợi, sự thiệt hại |
| 860 | disagree | bất đồng, không đồng ý, khác, không giống, không hợp |
| 861 | disagreement | sự bất đồng, sự không đồng ý, sự khác nhau |
| 862 | disappear | biến mất, biến đi |
| 863 | disappoint | không làm thỏa ước nguyện, ý mong đợi, thất ước, làm thất bại |
| 864 | disappointed | thất vọng |
| 865 | disappointing | làm chán ngán, làm thất vọng |
| 866 | disappointment | sự chán ngán, sự thất vọng |
| 867 | disapproval | sự phản đổi, sự không tán thành |
| 868 | disapprove | không tán thành, phản đối, chê |
| 869 | disapproving | phản đối |
| 870 | disaster | tai họa, thảm họa |
| 871 | disc, disk | đĩa |
| 872 | discipline | kỷ luật |
| 873 | discount | sự bớt giá, sự chiết khấu, tiền bớt chiết khấu |
| 874 | discover | khám phá, phát hiện ra, nhận ra |
| 875 | discovery | sự khám phá, sự tìm ra, sự phát hiện ra |
| 876 | discuss | thảo luận, tranh luận |
| 877 | discussion | sự thảo luận, sự tranh luận |
| 878 | disease | căn bệnh, bệnh tật |
| 879 | disgust | làm ghê tởm, làm kinh tởm, làm phẫn nộ |
| 880 | disgusted | chán ghét, phẫn nộ |
| 881 | disgusting | làm ghê tởm, kinh tởm |
| 882 | dish | đĩa (đựng thức ăn) |
| 883 | dishonest | bất lương, không thành thật |
| 884 | dishonestly | bất lương, không lương thiện |
| 885 | disk | đĩa, đĩa hát |
| 886 | dislike | sự không ưa, không thích, sự ghé |
| 887 | dismiss | giải tán (quân đội, đám đông), sa thải (người làm) |
| 888 | display | bày tỏ, phô trương, trưng bày, sự bày ra, phô bày, trưng bày |
| 889 | dissolve | tan rã, phân hủy, giải tán |
| 890 | distance | khoảng cách, tầm xa |
| 891 | distinguish | phân biệt, nhận ra, nghe ra |
| 892 | distribute | phân bổ, phân phối, sắp xếp, phâ loại |
| 893 | distribution | sự phân bổ, sự phân phối, phân phát, sự sắp xếp |
| 894 | district | huyện, quận |
| 895 | disturb | làm mất yên tĩnh, làm náo động, quấy rầy |
| 896 | disturbing | xáo trộn |
| 897 | divide | chia, chia ra, phân ra |
| 898 | division | sự chia, sự phân chia, sự phân loại |
| 899 | divorce | sự ly dị |
| 900 | divorced | đã ly dị |
| 901 | do | làm |
| 902 | doctor (abbr Dr) | bác sĩ y khoa, tiến sĩ |
| 903 | document | văn kiện, tài liệu, tư liệu |
| 904 | dog | chó |
| 905 | dollar | đô la Mỹ |
| 906 | domestic | vật nuôi trong nhà, (thuộc) nội trợ, quốc nội |
| 907 | dominate | chiếm ưu thế, có ảnh hưởng, chi phối, kiềm chế |
| 908 | door | cửa, cửa ra vào |
| 909 | dot | chấm nhỏ, điểm, của hồi môn |
| 910 | double | đôi, hai, kép, cái gấp đôi, lượng gấp đôi, làm gấp đôi |
| 911 | doubt | sự nghi ngờ, sự ngờ vực, nghi ngờ, ngờ vực |
| 912 | down | xuống |
| 913 | downstairs | ở dưới nhà, ở tầng dưới, xống gác, tầng dưới |
| 914 | downward | xuống, đi xuống |
| 915 | downwards | xuống, đi xuống |
| 916 | dozen | tá (12) |
| 917 | draft | bản phác thảo, sơ đồ thiết kế, phác thảo, thiết kế |
| 918 | drag | lôi kéo, kéo lê |
| 919 | drama | kịch, tuồng |
| 920 | dramatic | như kịch, như đóng kịch, thích hợp với sân khấu |
| 921 | dramatically | đột ngột |
| 922 | draw | vẽ, kéo |
| 923 | drawer | người vẽ, người kéo |
| 924 | drawing | bản vẽ, bức vẽ, sự kéo |
| 925 | dream | giấc mơ, mơ |
| 926 | dress | quần áo, mặc (quần áo), ăn mặc |
| 927 | dressed | cách ăn mặc |
| 928 | drink | đồ uống, uống |
| 929 | drive | lái , đua xe, cuộc đua xe (điều khiển) |
| 930 | driver | người lái xe |
| 931 | driving | sự lái xe, cuộc đua xe |
| 932 | drop | chảy nhỏ giọt, rơi, rớt, giọt (nước, máu...) |
| 933 | drug | thuốc, dược phẩm, ma túy |
| 934 | drugstore | hiệu thuốc, cửa hàng dược phẩm |
| 935 | drum | cái trống, tiếng trống |
| 936 | drunk | say rượu |
| 937 | dry | khô, cạn, làm khô, sấy khô |
| 938 | due | đến kỳ hạn (trả nợ), xứng đáng, thích đáng. |
| 939 | due to | vì, do, tại, nhờ có |
| 940 | dull | chậm hiểu, ngu đần |
| 941 | dump | đổ rác, đống rác, nơi đổ rác |
| 942 | during | trong lúc, trong thời gian |
| 943 | dust | bụi, rác, rắc (bụi, phấn), quét bụi, phủi bụi |
| 944 | duty | sự tôn kính, kính trọng, bồn phận, trách nhiệm |
| 945 | DVD | đĩa DVD |
| 946 | dying | sự chết |
| 947 | e.g. | Viết tắt của cụm tư La tinh exemp gratia (for example) |
| 948 | each | mỗi |
| 949 | each other | nhau, lẫn nhau |
| 950 | ear | tai |
| 951 | early | sớm |
| 952 | earn | kiếm (tiền), giành (phần thưởng) |
| 953 | earth | đất, trái đất |
| 954 | ease | sự thanh thản, sự thoải mái, làm thanh thản, làm yên tâm, làm dễ chịu |
| 955 | easily | dễ dàng |
| 956 | east | hướng đông, phía đông, (thuộc) đông, ở phía đông |
| 957 | eastern | đông |
| 958 | easy | dễ dàng, dễ tính, ung dung |
| 959 | eat | ăn |
| 960 | economic | (thuộc) Kinh tế |
| 961 | economy | sự tiết kiệm, sự quản lý kinh tế |
| 962 | edge | lưỡi, cạnh sắc |
| 963 | edition | nhà xuất bản, sự xuất bản |
| 964 | editor | người thu thập và xuất bản, chủ bút |
| 965 | educate | giáo dục, cho ăn học, rèn luyện |
| 966 | educated | được giáo dục, được đào tạo |
| 967 | education | sự giáo dục, sự rèn luyện (kỹ năng) |
| 968 | effect | hiệu ứng, hiệu quả, kết quả |
| 969 | effective | có kết quả, có hiệu lực |
| 970 | effectively | có kết quả, có hiệu lực |
| 971 | efficient | có hiệu lực, có hiệu quả |
| 972 | efficiently | có hiệu quả, hiệu nghiệm |
| 973 | effort | sự cố gắng, sự nỗ lực |
| 974 | egg | trứng |
| 975 | either | mỗi, một, cũng phải thế |
| 976 | elbow | khuỷu tay |
| 977 | elderly | có tuổi, cao tuổi |
| 978 | elect | bầu, quyết định |
| 979 | election | sự bầu cử, cuộc tuyển cử |
| 980 | electric | (thuộc) điện, có điện, phát điện |
| 981 | electrical | (thuộc) điện |
| 982 | electricity | điện, điện lực, điện lực học |
| 983 | electronic | (thuộc) điện tử |
| 984 | elegant | thanh lịch, tao nhã |
| 985 | element | yếu tố, nguyên tố |
| 986 | elevator | máy nâng, thang máy |
| 987 | else | khác, nữa, nếu không |
| 988 | elsewhere | ở một nơi nào khác |
| 989 | email, e-mail | thư điện tử, gửi thư điện tử |
| 990 | embarrass | lúng túng, làm ngượng nghịu, làm rắc rối, gây khó khăn |
| 991 | embarrassed | lúng túng, bối rối, ngượng, mang nợ |
| 992 | embarrassing | làm lúng túng, ngăn trở |
| 993 | embarrassment | sự lúng túng, sự bối rối |
| 994 | emerge | nổi lên, hiện ra, nổi bật lên |
| 995 | emotion | xự xúc động, sự cảm động, mối xác cảm |
| 996 | emotional | cảm động, xúc động, xúc cảm, dễ cảm động, dễ xúc cảm |
| 997 | emotionally | xúc động |
| 998 | emphasis | sự nhấn mạnh, tầm quan trọng |
| 999 | emphasize | nhấn mạnh, làm nổi bật |
| 1000 | empire | đế chế, đế quốc |
| 1001 | employ | dùng, thuê ai làm gì |
| 1002 | employee | người lao động, người làm công |
| 1003 | employer | chủ, người sử dụng lao động |
| 1004 | employment | sự thuê mướn |
| 1005 | empty | trống, rỗng, đổ, dốc, uống, làm cạn |
| 1006 | enable | làm cho có thể, có khả năng, cho phép ai làm gì |
| 1007 | encounter | chạm chán, bắt gặp, sự chạm trán, sự bắt gặp |
| 1008 | encourage | động viên, ủng hộ, giúp đỡ, làm cấn đảm, mạnh dạn |
| 1009 | encouragement | niềm cổ vũ, động viên, khuyến khích |
| 1010 | end | giới hạn, sự kết thúc, kết thúc, chấm dứt. in the end cuối cùng, v sau |
| 1011 | ending | sự kết thúc, sự chấm dứt, phần cuối, kết cục |
| 1012 | enemy | kẻ thù, quân địch |
| 1013 | energy | năng lượng, nghị lực, sinh lực |
| 1014 | engage | hứa hẹn, cam kết, đính ước |
| 1015 | engaged | đã đính ước, đã hứa hôn, đã có người |
| 1016 | engine | máy, động cơ |
| 1017 | engineer | kỹ sư |
| 1018 | engineering | nghề kỹ sư, công việc của kỹ sư |
| 1019 | enjoy | thưởng thức, thích thú cái gì, được hưởng, có được |
| 1020 | enjoyable | thú vị, thích thú |
| 1021 | enjoyment | sự thích thú, sự có được, được hưởng |
| 1022 | enormous | to lớn, khổng lồ |
| 1023 | enough | đủ |
| 1024 | enquiry | sự điều tra, sự thẩm vấn |
| 1025 | ensure | bảo đảm, chắc chắn |
| 1026 | enter | đi vào, gia nhập |
| 1027 | entertain | giải trí, tiếp đón, chiêu đãi |
| 1028 | entertainer | người quản trò, người tiếp đãi, chiêu đãi |
| 1029 | entertaining | giải trí |
| 1030 | entertainment | sự giải trí, sự tiếp đãi, chiêu đãi |
| 1031 | enthusiasm | sự hăng hái, sự nhiệt tình |
| 1032 | enthusiastic | hăng hái, say mê, nhiệt tình |
| 1033 | entire | toàn thể, toàn bộ |
| 1034 | entirely | toàn vẹn, trọn vẹn, toàn bộ |
| 1035 | entitle | cho tiêu đề, cho tên (sách), cho quyền làm gì |
| 1036 | entrance | sự đi vào, sự nhậm chức |
| 1037 | entry | sự ghi vào sổ sách, sự đi vào, sự tiếp nhận (pháp lý) |
| 1038 | envelope | phong bì |
| 1039 | environment | môi trường, hoàn cảnh xung quanh |
| 1040 | environmental | thuộc về môi trường |
| 1041 | equal | ngang, bằng, người ngang hàng, ngang tài, sức, bằng, ngang |
| 1042 | equally | bằng nhau, ngang bằng |
| 1043 | equipment | trang, thiết bị |
| 1044 | equivalent | tương đương, tư, vật tương đương |
| 1045 | error | lỗi, sự sai sót, sai lầm |
| 1046 | escape | trốn thoát, thoát khỏi, sự trốn thoát, lỗi thoát |
| 1047 | especially | đặc biệt là, nhất là |
| 1048 | essay | bài tiểu luận |
| 1049 | essential | bản chất, thực chất, cốt yếu, yếu tố cần thiết |
| 1050 | essentially | về bản chất, về cơ bản |
| 1051 | establish | lập, thành lập |
| 1052 | estate | tài sản, di sản, bất động sản |
| 1053 | estimate | sự ước lượng, đánh giá, ước lượng, đánh giá |
| 1054 | etc., et cetera | vân vân |
| 1055 | euro | đơn vị tiền tệ của liên minh châu Âu |
| 1056 | even | ngay cả, ngay, lại còn, bằng phẳng, điềm đạm, ngang bằng |
| 1057 | evening | buổi chiều, tối |
| 1058 | event | sự việc, sự kiện |
| 1059 | eventually | cuối cùng |
| 1060 | ever | từng, từ trước tới giờ |
| 1061 | every | mỗi, mọi |
| 1062 | everyone, everybody | mọi người |
| 1063 | everything | mọi vật, mọi thứ |
| 1064 | everywhere | mọi nơi |
| 1065 | evidence | điều hiển nhiên, điều rõ ràng |
| 1066 | evil | xấu, ác, điều xấu, điều ác, điều tai hại |
| 1067 | ex- | tiền tố chỉ bên ngoài |
| 1068 | exact | chính xác, đúng |
| 1069 | exactly | chính xác, đúng đắn |
| 1070 | exaggerate | cường điệu, phóng đại |
| 1071 | exaggerated | cường điệu, phòng đại |
| 1072 | exam | viết tắt của Examination (xem nghĩa phía dưới) |
| 1073 | examination | sự thi cử, kỳ thi |
| 1074 | examine | thẩm tra, khám xét, hỏi han (thí sinh) |
| 1075 | example | thí dụ, ví dụ |
| 1076 | excellent | xuất sắc, xuất chúng |
| 1077 | except | trừ ra, không kể, trừ phi |
| 1078 | exception | sự trừ ra, sự loại ra |
| 1079 | exchange | trao đổi, sự trao đổi |
| 1080 | excite | kích thích, kích động |
| 1081 | excited | bị kích thích, bị kích động |
| 1082 | excitement | sự kích thích, sự kích động |
| 1083 | exciting | hứng thú, thú vị |
| 1084 | exclude | ngăn chặn, loại trừ |
| 1085 | excluding | ngoài ra, trư ra |
| 1086 | excuse | lời xin lỗi, bào chữa, xin lỗi, tha thứ, tha lỗi |
| 1087 | executive | sự thi hành, chấp hành, (thuộc) s thi hành, chấp hành |
| 1088 | exercise | bài tập, sự thi hành, sự thực hiện, làm, thi hành, thực hiện |
| 1089 | exhibit | trưng bày, triển lãm, vật trưng bày vật triển lãm |
| 1090 | exhibition | cuộc triển lãm, trưng bày |
| 1091 | exist | tồn tại, sống |
| 1092 | existence | sự tồn tại, sự sống |
| 1093 | exit | lỗi ra, sự đi ra, thoát ra |
| 1094 | expand | mở rộng, phát triển, nở, giãn ra |
| 1095 | expect | chờ đợi, mong ngóng, liệu trước |
| 1096 | expectation | sự mong chờ, sự chờ đợi |
| 1097 | expected | được chờ đợi, được hy vọng |
| 1098 | expense | chi phí |
| 1099 | expensive | đắt |
| 1100 | experience | kinh nghiệm, trải qua, nếm mùi |
| 1101 | experienced | có kinh nghiệm, tưng trải, giàu kinh nghiệm |
| 1102 | experiment | cuộc thí nghiệm, thí nghiệm |
| 1103 | expert | chuyên gia, chuyên môn, thành thạo |
| 1104 | explain | giải nghĩa, giải thích |
| 1105 | explanation | sự giải nghĩa, giải thích |
| 1106 | explode | đập tan (hy vọng...), làm nổ, nổ |
| 1107 | explore | thăm dò, thám hiểm |
| 1108 | explosion | sự nổ, sự phát triển ồ ạt |
| 1109 | export | xuất khẩu, hàng xuất khẩu, sự xuất khẩu |
| 1110 | expose | trưng bày, phơi bày |
| 1111 | express | diễn tả, biểu lộ, bày tỏ, nhanh, tốc hành |
| 1112 | expression | sự diễn tả, sự bày tỏ, biểu lộ, sự diễn đạt |
| 1113 | extend | giơ, duỗi ra (tay, châ(n).), kéo dài (thời gia(n).), dành cho, gửi lời |
| 1114 | extension | sự giơ, duỗi, sự kéo dài, sự dành cho, gửi lời |
| 1115 | extensive | rộng rãi, bao quát |
| 1116 | extent | quy mô, phạm vi |
| 1117 | extra | thêm, phụ, ngoại, thứ thêm, phụ |
| 1118 | extraordinary | đặc biệt, lạ thường, khác thường |
| 1119 | extreme | vô cùng, khắc nghiệt, quá khích, cực đoan, sự quá khích |
| 1120 | extremely | vô cùng, cực độ |
| 1121 | eye | mắt |
| 1122 | face | mặt, thể diện, đương đầu, đối phó đối mặt |
| 1123 | facility | điều kiện dễ dàng, sự dễ dàng, thuận lợi |
| 1124 | fact | việc, sự việc, sự kiện |
| 1125 | factor | nhân tố |
| 1126 | factory | nhà máy, xí nghiệp, xưởng |
| 1127 | fail | sai, thất bại |
| 1128 | failure | sự thất bại, người thất bại |
| 1129 | faint | nhút nhát, yếu ớt |
| 1130 | faintly | nhút nhát, yếu ớt |
| 1131 | fair | hợp lý, công bằng, thuận lợi |
| 1132 | fairly | hợp lý, công bằng |
| 1133 | faith | sự tin tưởng, tin cậy, niềm tin, vật đảm bảo |
| 1134 | faithful | trung thành, chung thủy, trung thực |
| 1135 | faithfully | trung thành, chung thủy, trung thực. |
| 1136 | yours faithfully | bạn chân thành |
| 1137 | fall | rơi, ngã, sự rơi, ngã. fall over ngã lộn nhào, bị đổ |
| 1138 | FALSE | sai, nhầm, giả dối |
| 1139 | fame | tên tuổi, danh tiếng |
| 1140 | familiar | thân thiết, quen thộc |
| 1141 | family | gia đình, thuộc gia đình |
| 1142 | famous | nổi tiếng |
| 1143 | fan | người hâm mộ |
| 1144 | fancy | tưởng tượng, cho, nghĩ rằng, tưởng tượng |
| 1145 | far | xa |
| 1146 | farm | trang trại |
| 1147 | farmer | nông dân, người chủ trại |
| 1148 | farming | công việc trồng trọt, đồng áng |
| 1149 | fashion | mốt, thời trang |
| 1150 | fashionable | đúng mốt, hợp thời trang |
| 1151 | fast | nhanh |
| 1152 | fasten | buộc, trói |
| 1153 | fat | béo, béo bở, mỡ, chất béo |
| 1154 | father | cha (bố) |
| 1155 | faucet | vòi (ở thùng rượu ) |
| 1156 | fault | sự thiết sót, sai sót |
| 1157 | favour | thiện ý, sự quý mến, sự đồng ý, sự chiếu cố. |
| 1158 | in favour/favor (of) | ủng hộ cái gì (to be in favour of something) |
| 1159 | favourite | được ưa thích, người (vật) được ưa thích |
| 1160 | fear | sự sợ hãi, e sợ, sợ, lo ngại |
| 1161 | feather | lông chim |
| 1162 | feature | nét đặt biệt, điểm đặc trưng, mô tả nét đặc biệt, đặc trưng của… |
| 1163 | February (abbr Feb) | tháng 2 |
| 1164 | federal | liên bang |
| 1165 | fee | tiền thù lao, học phí |
| 1166 | feed | cho ăn, nuôi |
| 1167 | feel | cảm thấy |
| 1168 | feel sick | buồn nôn |
| 1169 | fellow | anh chàng (đáng yêu), đồng chí |
| 1170 | female | thuộc giống cái, giống cái |
| 1171 | fence | hàng rào |
| 1172 | festival | lễ hội, đại hội liên hoan |
| 1173 | fetch | tìm về, đem về, làm bực mình, làm say mê, quyến rũ |
| 1174 | field | cánh đồng, bãi chiến trường |
| 1175 | fight | đấu tranh, chiến đấu, sự đấu tranh, cuộc chiến đấu |
| 1176 | fighting | sự chiến đấu, sự đấu tranh |
| 1177 | figure | hình dáng, nhân vật, hình dung, miêu tả |
| 1178 | file | hồ sơ, tài liệu |
| 1179 | fill | làm đấy, lấp kín |
| 1180 | film | phim, được dựng thành phim |
| 1181 | final | cuối cùng, cuộc đấu chung kết |
| 1182 | finally | cuối cùng, sau cùng |
| 1183 | finance | tài chính, tài trợ, cấp vốn |
| 1184 | financial | thuộc (tài chính) |
| 1185 | find | tìm, tìm thấy. |
| 1186 | find out sth | khám phá, tìm ra |
| 1187 | fine | tốt, giỏi |
| 1188 | finely | đẹp đẽ, tế nhị, cao thượng |
| 1189 | finger | ngón tay |
| 1190 | finish | kết thúc, hoàn thành, sự kết thúc, phần cuối |
| 1191 | finished | hoàn tất, hoàn thành |
| 1192 | fire | lửa, đốt cháy. |
| 1193 | set fire to | đốt cháy cái gì |
| 1194 | firm | hãng, công ty, chắc, kiên quyết, vũng vàng, mạnh mẽ |
| 1195 | firmly | vững chắc, kiên quyết |
| 1196 | first | thứ nhất, đầu tiên, trước hết, người, vật đầu tiên, thứ nhất. |
| 1197 | at first | trực tiếp |
| 1198 | fish | cá, món cá, câu cá, bắt cá |
| 1199 | fishing | sự câu cá, sự đánh cá |
| 1200 | fit | hợp, vưa, thích hợp, xứng đáng |
| 1201 | fix | đóng, gắn, lắp, sửa chữa, sửa sang |
| 1202 | fixed | đứng yên, bất động |
| 1203 | flag | quốc kỳ |
| 1204 | flame | ngọn lửa |
| 1205 | flash | loé sáng, vụt sáng, ánh sáng lóe lên, đèn nháy |
| 1206 | flat | bằng phẳng, bẹt, nhẵn, dãy phòng, căn phòng, mặt phẳng |
| 1207 | flavour | vị, mùi, cho gia vị, làm tăng thêm mùi vị |
| 1208 | flesh | thịt |
| 1209 | flight | sự bỏ chạy, rút chạy, sự bay, chuyến bay |
| 1210 | float | nổi, trôi, lơ lửng |
| 1211 | flood | lụt, lũ lụtl, tràn đầy, tràn ngập |
| 1212 | floor | sàn, tầng (nhà) |
| 1213 | flour | bột, bột mỳ |
| 1214 | flow | sự chảy, chảy |
| 1215 | flower | hoa, bông, đóa, cây hoa |
| 1216 | flu | bệnh cúm |
| 1217 | fly | bay, sự bay, quãng đường bay |
| 1218 | flying | biết bay, sự bay, chuyến bay |
| 1219 | focus | tập trung, trung tâm, trọng tâm ((n)bóng) |
| 1220 | fold | gấp, vén, xắn, nếp gấp |
| 1221 | folding | gấp lại được |
| 1222 | follow | đi theo sau, theo, tiếp theo |
| 1223 | following | tiếp theo, theo sau, sau đây, sau, tiếp theo |
| 1224 | food | đồ ăn, thức, món ăn |
| 1225 | foot | chân, bàn chân |
| 1226 | football | bóng đá |
| 1227 | for | cho, dành cho... |
| 1228 | force | sức mạnh, ép buộc, cưỡng ép |
| 1229 | forecast | sự dự đoán, dự báo, dự đoán, dự báo |
| 1230 | foreign | (thuộc) nước ngoài, tư nước ngoài, ở nước ngoài |
| 1231 | forest | rừng |
| 1232 | forever | mãi mãi |
| 1233 | forget | quên |
| 1234 | forgive | tha, tha thứ |
| 1235 | fork | cái nĩa |
| 1236 | form | hình thể, hình dạng, hình thức, làm thành, được tạo thành |
| 1237 | formal | hình thức |
| 1238 | formally | chính thức |
| 1239 | former | trước, cũ, xưa, nguyên |
| 1240 | formerly | trước đây, thuở xưa |
| 1241 | formula | công thức, thể thức, cách thức |
| 1242 | fortune | sự giàu có, sự thịnh vượng |
| 1243 | forward | ở phía trước, tiến về phía trước |
| 1244 | forward, forwards | về tương lai, sau này ở phía trước, tiến về phía trước |
| 1245 | found | tìm, tìm thấy |
| 1246 | foundation | sự thành lập, sự sáng lập, tổ chức |
| 1247 | frame | cấu trúc, hệ thống, dàn xếp, bố trí |
| 1248 | free | miễn phí, tự do, giải phóng, trả tự do |
| 1249 | freedom | sự tự do, nền tự do |
| 1250 | freely | tự do, thoải mái |
| 1251 | freeze | đóng băng, đông lạnh |
| 1252 | frequent | thường xuyên |
| 1253 | frequently | thường xuyên |
| 1254 | fresh | tươi, tươi tắn |
| 1255 | freshly | tươi mát, khỏe khoắn |
| 1256 | Friday (abbr Fri) | thứ Sáu |
| 1257 | fridge | tủ lạnh |
| 1258 | friend | người bạn |
| 1259 | friendly | thân thiện, thân mật |
| 1260 | friendship | tình bạn, tình hữu nghị |
| 1261 | frighten | làm sợ, làm hoảng sợ |
| 1262 | frightened | hoảng sợ, khiếp sợ |
| 1263 | frightening | kinh khủng, khủng khiếp |
| 1264 | from | từ |
| 1265 | front | mặt, đằng trước, về phía trước. |
| 1266 | in front (of) | ở phía trước |
| 1267 | frozen | lạnh giá |
| 1268 | fruit | quả, trái cây |
| 1269 | fry | rán, chiên, thịt rán |
| 1270 | fuel | chất đốt, nhiên liệu |
| 1271 | full | đầy, đầy đủ |
| 1272 | fully | đầy đủ, hoàn toàn |
| 1273 | fun | sự vui đùa, sự vui thích, hài hước |
| 1274 | make fun of | đùa cợt, chế giễu, chế nhạo |
| 1275 | function | chức năng, họat động, chạy (máy) |
| 1276 | fund | kho, quỹ, tài trợ, tiền bạc, để tiền vào công quỹ |
| 1277 | fundamental | cơ bản, cơ sở, chủ yếu |
| 1278 | funeral | lễ tang, đám tang |
| 1279 | funny | buồn cười, khôi hài |
| 1280 | fur | bộ da lông thú |
| 1281 | furniture | đồ đạc (trong nhà) |
| 1282 | further | xa hơn nữa, thêm nữa |
| 1283 | further, furthest | cấp so sánh của far |
| 1284 | future | tương lai |
| 1285 | gain | lợi, lợi ích, giành được, kiếm được, đạt tới |
| 1286 | gallon | Galông 1gl = 4, 54 lít ở Anh, 3, 78 lít ở Mỹ |
| 1287 | gamble | đánh bạc, cuộc đánh bạc |
| 1288 | gambling | trò cờ bạc |
| 1289 | game | trò chơi |
| 1290 | gap | đèo, lỗ hổng, kẽ hở, chỗ trống |
| 1291 | garage | nhà để ô tô |
| 1292 | garbage | lòng, ruột (thú) |
| 1293 | garden | vườn |
| 1294 | gas | khí, hơi đốt |
| 1295 | gasoline | dầu lửa, dầu hỏa, xăng |
| 1296 | gate | cổng |
| 1297 | gather | tập hợp, hái, lượm, thu thập |
| 1298 | gear | cơ cấu, thiết bị, dụng cụ |
| 1299 | general | chung, chung chung, tổng |
| 1300 | generally | nói chung, đại thể. |
| 1301 | in general | nói chung, đại khái |
| 1302 | generate | sinh, đẻ ra |
| 1303 | generation | sự sinh ra, sự phát sinh ra, thế hệ đời |
| 1304 | generous | rộng lượng, khoan hồng, hào phóng |
| 1305 | generously | rộng lượng, hào phóng |
| 1306 | gentle | hiền lành, dịu dàng, nhẹ nhàng |
| 1307 | gentleman | người quý phái, người thượng lưu |
| 1308 | gently | nhẹ nhàng, êm ái, dịu dàng |
| 1309 | genuine | thành thật, chân thật, xác thực |
| 1310 | genuinely | thành thật, chân thật |
| 1311 | geography | địa lý, khoa địa lý |
| 1312 | get | được, có được. get on leo, trèo lên. |
| 1313 | get off | ra khỏi, thoát khỏi |
| 1314 | giant | người khổng lồ, người phi thường khổng lồ, phi thường |
| 1315 | gift | quà tặng |
| 1316 | girl | con gái |
| 1317 | girlfriend | bạn gái, người yêu |
| 1318 | give | cho, biếu, tặng. |
| 1319 | give sth away | cho phát. |
| 1320 | give sth out | chia, phân phối |
| 1321 | give (sth) up | bỏ, tư bỏ |
| 1322 | give birth | sinh ra |
| 1323 | glad | vui lòng, sung sướng |
| 1324 | glass | kính, thủy tinh, cái cốc, ly |
| 1325 | glasses | kính đeo mắt |
| 1326 | global | toàn cầu, toàn thể, toàn bộ |
| 1327 | glove | bao tay, găng tay |
| 1328 | glue | keo, hồ, gắn lại, dán bằng keo, hồ |
| 1329 | go | đi. |
| 1330 | go dow | đi xuống. |
| 1331 | go up | đi lên. |
| 1332 | be going to | sắp sửa, có ý định |
| 1333 | goal | mục đích, bàn thắng, khung thành |
| 1334 | god | thần, Chúa |
| 1335 | gold | vàng, bằng vàng |
| 1336 | good | tốt, hay, tuyệt, điều tốt, điều thiện. |
| 1337 | good at | tiến bộ ở. |
| 1338 | good for | có lợi cho |
| 1339 | good, well | tốt, khỏe |
| 1340 | goodbye | tạm biệt, lời chào tạm biệt |
| 1341 | goods | của cải, tài sản, hàng hóa |
| 1342 | govern | cai trị, thống trị, cầm quyền |
| 1343 | government | chính phủ, nội các, sự cai trị |
| 1344 | governor | thủ lĩnh, chủ, kẻ thống trị |
| 1345 | grab | túm lấy, vồ, chộp lấy |
| 1346 | grade | điểm, điểm số, phân loại, xếp loại |
| 1347 | gradual | dần dần, tưng bước một |
| 1348 | gradually | dần dần, tư tư |
| 1349 | grain | thóc lúa, hạt, hột, tính chất, bản chất |
| 1350 | gram | đậu xanh |
| 1351 | gram, gramme (abbr g, gm) | ngữ pháp |
| 1352 | grammar | văn phạm |
| 1353 | grand | rộng lớn, vĩ đại |
| 1354 | grandchild | cháu (của ông bà) |
| 1355 | granddaughter | cháu gái |
| 1356 | grandfather | ông |
| 1357 | grandmother | bà |
| 1358 | grandparent | ông bà |
| 1359 | grandson | cháu trai |
| 1360 | grant | cho, bán, cấp, sự cho, sự bán, sự cấp |
| 1361 | grass | cỏ, bãi cỏ, đồng cỏ |
| 1362 | grateful | biết ơn, dễ chịu, khoan khoái |
| 1363 | grave | mộ, dấu huyền, trang nghiêm, nghiêm trọng |
| 1364 | gray | xám, hoa râm (tóc) |
| 1365 | great | to, lớn, vĩ đại |
| 1366 | greatly | rất, lắm, cao thượng, cao cả |
| 1367 | green | xanh lá cây |
| 1368 | grey | xám, hoa râm (tóc) |
| 1369 | grey, usually gray | màu xám |
| 1370 | groceries | hàng tạp hóa |
| 1371 | grocery | cửa hàng tạp phẩm |
| 1372 | ground | mặt đất, đất, bãi đất |
| 1373 | group | nhóm |
| 1374 | grow | mọc, mọc lên. grow up lớn lên, trưởng thành |
| 1375 | growth | sự lớn lên, sự phát triển |
| 1376 | guarantee | sự bảo hành, bảo lãnh, người bảo lãnh, cam đoan, bảo đảm |
| 1377 | guard | cái chắn, người bảo vệ, bảo vệ, gác, canh giữ |
| 1378 | guess | đoán, phỏng đoán, sự đoán, sự ước chưng |
| 1379 | guest | khách, khách mời |
| 1380 | guide | điều chỉ dẫn, người hướng dẫn, dẫn đường, chỉ đường |
| 1381 | guilty | có tội, phạm tội, tội lỗi |
| 1382 | gun | súng |
| 1383 | guy | bù nhìn, anh chàng, gã |
| 1384 | habit | thói quen, tập quán |
| 1385 | hair | tóc |
| 1386 | hairdresser | thợ làm tóc |
| 1387 | half | một nửa, phần chia đôi, nửa giờ, nửa |
| 1388 | hall | đại sảnh, tòa (thị chính), hội trường |
| 1389 | hammer | búa |
| 1390 | hand | tay, bàn tay, trao tay, truyền cho |
| 1391 | handle | cầm, sờ mó, tay cầm, móc quai |
| 1392 | hang | treo, mắc |
| 1393 | happen | xảy ra, xảy đến |
| 1394 | happily | sung sướng, hạnh phúc |
| 1395 | happiness | sự sung sướng, hạnh phúc |
| 1396 | happy | vui sướng, hạnh phúc |
| 1397 | hard | cứng, rắn, hà khắc, hết sức cố gắng, tích cực |
| 1398 | hardly | khắc nghiệt, nghiêm khắc, tàn tệ, khó khăn |
| 1399 | harm | thiệt hại, tổn hao, làm hại, gây thiệt hại |
| 1400 | harmful | gây tai hại, có hại |
| 1401 | harmless | không có hại |
| 1402 | hat | cái mũ |
| 1403 | hate | ghét, lòng căm ghét, thù hận |
| 1404 | hatred | lòng căm thì, sự căm ghét |
| 1405 | have | có |
| 1406 | have to | phải (bắt buộc, có bổn phận phải) |
| 1407 | he | nó, anh ấy, ông ấy |
| 1408 | head | cái đầu (người, thú), chỉ huy, lãnh đại, dẫn đầu |
| 1409 | headache | chứng nhức đầu |
| 1410 | heal | chữa khỏi, làm lành |
| 1411 | health | sức khỏe, thể chất, sự lành mạnh |
| 1412 | healthy | khỏe mạnh, lành mạnh |
| 1413 | hear | nghe |
| 1414 | hearing | sự nghe, thính giác |
| 1415 | heart | tim, trái tim |
| 1416 | heat | hơi nóng, sức nóng |
| 1417 | heating | sự đốt nóng, sự làm nóng |
| 1418 | heavily | nặng, nặng nề |
| 1419 | heavy | nặng, nặng nề |
| 1420 | heel | gót chân |
| 1421 | height | chiều cao, độ cao, đỉnh, điểm cao |
| 1422 | hell | địa ngục |
| 1423 | hello | chào, xin chào, lời chào |
| 1424 | help | giúp đỡ, sự giúp đỡ |
| 1425 | helpful | có ích, giúp đỡ |
| 1426 | hence | sau đây, kể từ đây, do đó, vì thế |
| 1427 | her | nó, chị ấy, cô ấy, bà ấy |
| 1428 | here | đây, ở đây |
| 1429 | hero | người anh hùng |
| 1430 | hers | cái của nó, cái của cô ấy, cái của chị ấy, cái của bà ấy |
| 1431 | herself | chính nó, chính cô ta, chính chị ta chính bà ta |
| 1432 | hesitate | ngập ngưng, do dự |
| 1433 | hi | xin chào |
| 1434 | hide | trốn, ẩn nấp, che giấu |
| 1435 | high | cao, ở mức độ cao |
| 1436 | highlight | làm nổi bật, nêu bật, chỗ nổi bật nhất, đẹp, sáng nhất |
| 1437 | highly | tốt, cao, hết sức, ở mức độ cao |
| 1438 | highway | đường quốc lộ |
| 1439 | hill | đồi |
| 1440 | him | nó, hắn, ông ấy, anh ấy |
| 1441 | himself | chính nó, chính hắn, chính ông ta, chính anh ta |
| 1442 | hip | hông |
| 1443 | hire | thuê, cho thuê (nhà...), sự thuê, sự cho thuê |
| 1444 | his | của nó, của hắn, của ông ấy, của anh ấy, cái của nó, cái của hắn, cái của, ông ấy, cái của anh ấy |
| 1445 | historical | lịch sử, thuộc lịch sử |
| 1446 | history | lịch sử, sử học |
| 1447 | hit | đánh, đấm, ném trúng, đòn, cú đấm |
| 1448 | hobby | sở thích riêng |
| 1449 | hold | cầm, nắm, giữ, sự cầm, sự nắm giữ |
| 1450 | hole | lỗ, lỗ trống, hang |
| 1451 | holiday | ngày lễ, ngày nghỉ |
| 1452 | hollow | rỗng, trống rỗng |
| 1453 | holy | linh thiêng, sùng đạo |
| 1454 | home | nhà, ở tại nhà, nước mình |
| 1455 | homework | bài tập về nhà (học sinh), công việc làm ở nhà |
| 1456 | honest | lương thiện, trung thực, chân thật |
| 1457 | honestly | lương thiện, trung thực, chân thật |
| 1458 | honour | danh dự, thanh danh, lòng kính trọng. |
| 1459 | in honour/honor of | để tỏ lòng tôn kính, trân trọng đối với |
| 1460 | hook | cái móc, bản lề, lưỡi câu |
| 1461 | horizontal | (thuộc) chân trời, ở chân trời, ngang, nằm ngang (trục hoành) |
| 1462 | horn | sừng (trâu, bò...) |
| 1463 | horror | điều kinh khủng, sự ghê rợn |
| 1464 | horse | ngựa |
| 1465 | hospital | bệnh viện, nhà thương |
| 1466 | host | chủ nhà, chủ tiệc, dẫn (c.trình), đăng cai tổ chức (hội nghị ) |
| 1467 | hot | nóng, nóng bức |
| 1468 | hotel | khách sạn |
| 1469 | hour | giờ |
| 1470 | house | nhà, căn nhà, toàn nhà |
| 1471 | household | hộ, gia đình, (thuộc) gia đình |
| 1472 | housing | nơi ăn chốn ở |
| 1473 | how | thế nào, như thế nào, làm sao, ra sao |
| 1474 | however | tuy nhiên, tuy vậy, dù thế nào |
| 1475 | huge | to lớn, khổng lồ |
| 1476 | human | (thuộc) con người, loài người |
| 1477 | humorous | hài hước, hóm hỉnh |
| 1478 | humour | sự hài hước, sự hóm hỉnh |
| 1479 | hungry | đói |
| 1480 | hunt | săn, đi săn |
| 1481 | hunting | sự đi săn |
| 1482 | hurry | sự vội vàng, sự gấp rút. |
| 1483 | in a hurry | vội vàng, hối hả, gấp rút |
| 1484 | hurt | làm bị thương, gây thiệt hại |
| 1485 | husband | người chồng |
| 1486 | i.e. | nghĩa là, tức là ( Id est) |
| 1487 | ice | băng, nước đá |
| 1488 | ice cream | kem |
| 1489 | idea | ý tưởng, quan niệm |
| 1490 | ideal | (thuộc) quan niệm, tư tưởng, lý tưởng |
| 1491 | ideally | lý tưởng, đúng như lý tưởng |
| 1492 | identify | nhận biết, nhận ra, nhận dạng |
| 1493 | identity | cá tính, nét nhận dạng, tính đồng nhất, giống hệt |
| 1494 | ignore | phớt lờ, tỏ ra không biết đến |
| 1495 | ill | ốm |
| 1496 | illegal | trái luật, bất hợp pháp |
| 1497 | illegally | trái luật, bất hợp pháp |
| 1498 | illness | sự đau yếu, ốm, bệnh tật |
| 1499 | illustrate | minh họa, làm rõ ý |
| 1500 | image | ảnh, hình ảnh |
| 1501 | imaginary | tưởng tượng, ảo |
| 1502 | imagination | trí tưởng tượng, sự tưởng tượng |
| 1503 | imagine | tưởng tượng, hình dung, tưởng rằng, cho rằng |
| 1504 | immediate | lập tức, tức thì |
| 1505 | immediately | ngay lập tức |
| 1506 | immoral | trái đạo đức, luân lý, xấu xa |
| 1507 | impact | sự và chạm, sự tác động, ảnh hưởng |
| 1508 | impatient | thiếu kiên nhẫn, nóng vội |
| 1509 | impatiently | nóng lòng, sốt ruột |
| 1510 | implication | sự lôi kéo, sự liên can, điều gợi ý |
| 1511 | imply | ngụ ý, bao hàm |
| 1512 | import | import sự nhập, sự nhập khẩu, nhập, nhập khẩu |
| 1513 | importance | sự quan trọng, tầm quan trọng |
| 1514 | important | quan trọng, hệ trọng |
| 1515 | importantly | quan trọng, trọng yếu |
| 1516 | impose | đánh (thuế...), bắt gánh vác, đánh tráo, lợi dụng |
| 1517 | impossible | không thể làm được, không thể xảy ra |
| 1518 | impress | ghi, khắc, in sâu vào, gây ấn tượng, làm cảm động |
| 1519 | impressed | được ghi, khắc, in sâu vào |
| 1520 | impression | ấn tượng, cảm giác, sự in, đóng dấu |
| 1521 | impressive | gây ấn tượng mạnh, hùng vĩ, oai vệ |
| 1522 | improve | cải thiện, cái tiến, mở mang |
| 1523 | in | ở, tại, trong, vào |
| 1524 | in addition | thêm vào |
| 1525 | in case of | nếu...... |
| 1526 | in control of | trong sự điều khiển của. under control dưới sự điều khiển của |
| 1527 | in exchange for | trong việc trao đổi về |
| 1528 | inability | sự bất lực, bất tài |
| 1529 | inch | insơ (đơn vị đo chiều dài Anh bằng 2, 54 cm) |
| 1530 | incident | việc xảy ra, việc có liên quan |
| 1531 | include | bao gồm, tính cả |
| 1532 | including | bao gồm, kể cả |
| 1533 | income | lợi tức, thu nhập |
| 1534 | increase | tăng, tăng thêm, sự tăng, sự tăng thêm |
| 1535 | increasingly | tăng thêm |
| 1536 | independence | sự độc lập, nền độc lập |
| 1537 | independent | độc lập |
| 1538 | independently | độc lập |
| 1539 | index | chỉ số, sự biểu thị |
| 1540 | indicate | chỉ, cho biết, biểu thị, trình bày ngắn gọn |
| 1541 | indication | sự chỉ, sự biểu thị, sự biểu lộ |
| 1542 | indirect | gián tiếp |
| 1543 | indirectly | gián tiếp |
| 1544 | individual | riêng, riêng biệt, cá nhân |
| 1545 | indoor | trong nhà |
| 1546 | indoors | ở trong nhà |
| 1547 | industrial | (thuộc) công nghiệp, kỹ nghệ |
| 1548 | industry | công nghiệp, kỹ nghệ |
| 1549 | inevitable | không thể tránh được, chắc chắn xảy ra, vẫn thường thấy, nghe |
| 1550 | inevitably | chắc chắn, chắc hẳn |
| 1551 | infect | nhiễm, tiêm nhiễm, đầu độc, lan truyền |
| 1552 | infection | sự nhiễm, sự đầu độc |
| 1553 | infectious | lây, nhiễm |
| 1554 | influence | sự ảnh hưởng, sự tác dụng, ảnh hưởng, tác động |
| 1555 | inform | báo cho biết, cung cấp tin tức |
| 1556 | informal | không chính thức, không nghi thức |
| 1557 | information | tin tức, tài liệu, kiến thức |
| 1558 | ingredient | phần hợp thành, thành phần |
| 1559 | initial | ban đầu, lúc đầu, chữ đầu (của 1 tên gọi) |
| 1560 | initially | vào lúc ban đầu, ban đầu |
| 1561 | initiative | bước đầu, sự khởi đầu |
| 1562 | injure | làm tổn thương, làm hại, xúc phạm |
| 1563 | injured | bị tổn thương, bị xúc phạm |
| 1564 | injury | sự làm tổn thương, làm hại, điều hại, điều tổn hại |
| 1565 | ink | mực |
| 1566 | inner | ở trong, nội bộ, thân cận |
| 1567 | innocent | vô tội, trong trắng, ngây thơ |
| 1568 | insect | sâu bọ, côn trùng |
| 1569 | insert | chèn vào, lồng vào |
| 1570 | inside | mặt trong, phía, phần trong, ở trong, nội bộ |
| 1571 | insist | cứ nhất định, cứ khăng khăng |
| 1572 | install | đặt (hệ thống máy móc, thiết bị...) |
| 1573 | instance | thí dị, ví dụ, trường hợp cá biệt. for instance ví dụ chẳng hạn |
| 1574 | instead | để thay thế. instead of thay cho |
| 1575 | institute | viện, học viện |
| 1576 | institution | sự thành lập, lập, cơ quan, trụ sở |
| 1577 | instruction | sự dạy, tài liệu cung cấp |
| 1578 | insult | lăng mạ, xỉ nhục, lời lăng mạ, sự xỉ nhục |
| 1579 | insulting | lăng mạ, xỉ nhục |
| 1580 | insurance | sự bảo hiểm |
| 1581 | intelligent | thông minh, sáng trí |
| 1582 | intend | ý định, có ý định |
| 1583 | intended | có ý định, có dụng ý |
| 1584 | intention | ý định, mục đích |
| 1585 | interest | sự thích thú, sự quan tâm, chú ý, làm quan tâm, làm chú ý |
| 1586 | interested | có thích thú, có quan tâm, có chú ý |
| 1587 | interesting | làm thích thú, làm quan tâm, làm chú ý |
| 1588 | interior | phần trong, phía trong, ở trong, ở phía trong |
| 1589 | internal | ở trong, bên trong, nội địa |
| 1590 | international | quốc tế |
| 1591 | internet | liên mạng |
| 1592 | interpret | giải thích |
| 1593 | interpretation | sự giải thích |
| 1594 | interrupt | làm gián đoạn, ngắt lời |
| 1595 | interruption | sự gián đoạn, sự ngắt lời |
| 1596 | interval | khoảng (khoãng thời gian), khoảng cách |
| 1597 | interview | cuộc phỏng vấn, sự gặp mặt, phỏng vấn, nói chuyện riêng |
| 1598 | into | vào, vào trong |
| 1599 | introduce | giới thiệu |
| 1600 | introduction | sự giới thiệu, lời giới thiệu |
| 1601 | invent | phát minh, sáng chế |
| 1602 | invention | sự phát minh, sự sáng chế |
| 1603 | invest | đầu tư |
| 1604 | investigate | điều tra, nghiên cứu |
| 1605 | investigation | sự điều tra, nghiên cứu |
| 1606 | invitation | lời mời, sự mời |
| 1607 | invite | mời |
| 1608 | involve | bao gồm, bao hàm, thu hút, dồn tâm trí. |
| 1609 | involved in | để hết tâm trí vào |
| 1610 | involvement | sự gồm, sự bao hàm, sự để, dồn hết tâm trí vào |
| 1611 | irritate | làm phát cáu, chọc tức |
| 1612 | irritated | tức giận, cáu tiết |
| 1613 | irritating | làm phát cáu, chọc tức |
| 1614 | island | hòn đảo |
| 1615 | issue | sự phát ra, sự phát sinh, phát hành, đưa ra |
| 1616 | it | cái đó, điều đó, con vật đó |
| 1617 | item | một món, một thứ, mục |
| 1618 | its | của cái đó, của điều đó, của con vật đó, cái của điều đó, cái của con vật đó |
| 1619 | itself | chính cái đó, chính điều đó, chính con vật đó |
| 1620 | jacket | áo vét |
| 1621 | jam | mứt, sự mắc kẹt, sự kẹt (máy...) |
| 1622 | January (abbrJan) | tháng giêng |
| 1623 | jealous | ghen,, ghen tị |
| 1624 | jeans | quần bò, quần zin |
| 1625 | jelly | thạch |
| 1626 | jewellery | nữ trang, kim hoàn |
| 1627 | job | việc, việc làm |
| 1628 | join | gia nhập, tham gia, nối, chắp, ghép |
| 1629 | joint | chung (giữa 2 người hoặc hơn), chỗ nối, đầu nối |
| 1630 | jointly | cùng nhau, cùng chung |
| 1631 | joke | trò cười, lời nói đùa, nói đùa, giễu cợt |
| 1632 | journalist | nhà báo |
| 1633 | joy | niềm vui, sự vui mừng |
| 1634 | judge | xét xử, phân xử, quan tòa, thẩm phán |
| 1635 | judgement | sự xét xử |
| 1636 | juice | nước ép (rau, củ, quả) |
| 1637 | July (abbr Jul) | tháng 7 |
| 1638 | June (abbr Jun) | tháng 6 |
| 1639 | junior | trẻ hơn, ít tuổi hơn, người ít tuổi hơn |
| 1640 | just | đúng, vưa đủ, vưa mới, chỉ |
| 1641 | justice | sự công bằng |
| 1642 | justified | hợp lý, được chứng minh là đúng |
| 1643 | justify | bào chữa, biện hộ |
| 1644 | keen | sắc, bén. |
| 1645 | keen on | say mê, ưa thích |
| 1646 | keep | giữ, giữ lại |
| 1647 | key | chìa khóa, khóa, thuộc (khóa) |
| 1648 | keyboard | bàn phím |
| 1649 | kick | đá, cú đá |
| 1650 | kid | con dê non |
| 1651 | kill | giết, tiêu diệt |
| 1652 | killing | sự giết chóc, sự tàn sát |
| 1653 | kilogram, kilogramme, kilo (abbr kg) | Kilôgam |
| 1654 | kilometre | Kilômet |
| 1655 | kilometre, kilometer (abbr k, km) | Kilômet |
| 1656 | kind | loại, giống, tử tế, có lòng tốt |
| 1657 | kindly | tử tế, tốt bụng |
| 1658 | kindness | sự tử tế, lòng tốt |
| 1659 | king | vua, quốc vương |
| 1660 | kiss | hôn, cái hôn |
| 1661 | kitchen | bếp |
| 1662 | knee | đầu gối |
| 1663 | knife | con dao |
| 1664 | knit | đan, thêu |
| 1665 | knitted | được đan, được thêu |
| 1666 | knitting | việc đan, hàng dệt kim |
| 1667 | knock | đánh, đập, cú đánh |
| 1668 | knot | cái nơ, điểm nút, điểm trung tâm |
| 1669 | know | biết |
| 1670 | knowledge | sự hiểu biết, tri thức |
| 1671 | label | nhãn, mác, dán nhãn, ghi mác |
| 1672 | laboratory, lab | phòng thí nghiệm |
| 1673 | labour | lao động, công việc |
| 1674 | lack | sự thiếu, thiếu |
| 1675 | lacking | ngu đần, ngây ngô |
| 1676 | lady | người yêu, vợ, quý bà, tiểu thư |
| 1677 | lake | hồ |
| 1678 | lamp | đèn |
| 1679 | land | đất, đất canh tác, đất đai |
| 1680 | landscape | phong cảnh |
| 1681 | lane | đường nhỏ (làng, hẻm phố) |
| 1682 | language | ngôn ngữ |
| 1683 | large | rộng, lớn, to |
| 1684 | largely | phong phú, ở mức độ lớn |
| 1685 | last | lần cuối, sau cùng, người cuối cùng, cuối cùng, rốt hết, kéo dài |
| 1686 | late | trễ, muộn |
| 1687 | later | chậm hơn |
| 1688 | latest | muộn nhất, chậm nhất, gần đây nhất |
| 1689 | latter | sau cùng, gần đây, mới đây |
| 1690 | laugh | cười, tiếng cười |
| 1691 | launch | hạ thủy (tàu), khai trương, sự hạ thủy, buổi giới thiệu sản phầm |
| 1692 | law | luật |
| 1693 | lawyer | luật sư |
| 1694 | lay | xếp, đặt, bố trí |
| 1695 | layer | lớp |
| 1696 | lazy | lười biếng |
| 1697 | lead (v) | lãnh đạo, dẫn dắt, sự lãnh đạo, sự hướng dẫn |
| 1698 | leader | người lãnh đạo, lãnh tụ |
| 1699 | leading | lãnh đạo, dẫn đầu |
| 1700 | leaf | lá cây, lá (vàng...) |
| 1701 | league | liên minh, liên hoàn |
| 1702 | lean | nghiêng, dựa, ỷ vào |
| 1703 | learn | học, nghiên cứu |
| 1704 | least | tối thiểu, ít nhất. |
| 1705 | at least | ít ra, ít nhất, chí ít |
| 1706 | leather | da thuộc |
| 1707 | leave | bỏ đi, rời đi, để lại. |
| 1708 | leave out | bỏ quên, bỏ sót |
| 1709 | lecture | bài diễn thuyết, bài thuyết trình, bài nói chuyện |
| 1710 | left | bên trái, về phía trái |
| 1711 | leg | chân (người, thú, bà(n)..) |
| 1712 | legal | hợp pháp |
| 1713 | legally | hợp pháp |
| 1714 | lemon | quả chanh |
| 1715 | lend | cho vay, cho mượn |
| 1716 | length | chiều dài, độ dài |
| 1717 | less | nhỏ bé, ít hơn, số lượng ít hơn |
| 1718 | lesson | bài học |
| 1719 | let | cho phép, để cho |
| 1720 | letter | thư, chữ cái, mẫu tự |
| 1721 | level | trình độ, cấp, vị trí, bằng, ngang bằng |
| 1722 | library | thư viện |
| 1723 | licence | bằng, chứng chỉ, bằng cử nhân, sự cho phép |
| 1724 | license | cấp chứng chỉ, cấp bằng, cho phép |
| 1725 | lid | nắp, vung (xoong, nồi..), mi mắt (eyelid) |
| 1726 | lie | nói dối, lời nói dối, sự dối trá |
| 1727 | life | đời, sự sống |
| 1728 | lift | giơ lên, nhấc lên, sự nâng, sự nhấc lên |
| 1729 | light | ánh sáng, nhẹ, nhẹ nhàng, đốt, thắp sáng |
| 1730 | lightly | nhẹ nhàng |
| 1731 | like | giống như, thích, như |
| 1732 | likely | có thể đúng, có thể xảy ra, có khả năng, có thể, chắc vậy |
| 1733 | limit | giới hạn, ranh giới, giới hạn, hạn chế |
| 1734 | limited | hạn chế, có giới hạn |
| 1735 | line | dây, đường, tuyến |
| 1736 | link | mắt xích, mối liên lạc, liên kết, kết nối |
| 1737 | lip | môi |
| 1738 | liquid | chất lỏng, lỏng, êm ái, du dương, không vững |
| 1739 | list | danh sách, ghi vào danh sách |
| 1740 | listen | nghe, lắng nghe |
| 1741 | literature | văn chương, văn học |
| 1742 | litre | lít |
| 1743 | live | sống, hoạt động |
| 1744 | lively | sống, sinh động |
| 1745 | living | sống, đang sống |
| 1746 | load | gánh nặng, vật nặng, chất, chở |
| 1747 | loan | sự vay mượn |
| 1748 | local | địa phương, bộ phận, cục bộ |
| 1749 | locally | có tính chat địa phương, cục bộ |
| 1750 | locate | xác định vị trí, định vị |
| 1751 | located | định vị |
| 1752 | location | vị trí, sự định vị |
| 1753 | lock | khóa |
| 1754 | logic | lô gic |
| 1755 | logical | hợp lý, hợp logic |
| 1756 | lonely | cô đơn, bơ vơ |
| 1757 | long | dài, xa, lâu |
| 1758 | look | nhìn, cái nhìn |
| 1759 | look after | trông nom, chăm sóc. |
| 1760 | look at | nhìn, ngắm, xem. |
| 1761 | look for | tìm kiếm. |
| 1762 | look forward to | mong đợi cách hân hoan |
| 1763 | loose | lỏng, không chặt |
| 1764 | loosely | lỏng lẻo |
| 1765 | lord | Chúa, vua |
| 1766 | lorry | xe tải |
| 1767 | lose | mất, thua, lạc |
| 1768 | loss | sự mất, sự thua |
| 1769 | lost | thua, mất |
| 1770 | lot, a lot | số lượng lớn, rất nhiều |
| 1771 | loud | to, inh ỏi, ầm ĩ, to, lớn (nói) |
| 1772 | loudly | ầm ĩ, inh ỏi |
| 1773 | love | tình yêu, lòng yêu thương, yêu, thích |
| 1774 | lovely | đẹp, xinh xắn, có duyên |
| 1775 | lover | người yêu, người tình |
| 1776 | low | thấp, bé, lùn |
| 1777 | loyal | trung thành, trung kiên |
| 1778 | luck | may mắn, vận may |
| 1779 | lucky | gặp may, gặp may mắn, hạnh phúc |
| 1780 | luggage | hành lý |
| 1781 | lump | cục, tảng, miếng, cái bướu |
| 1782 | lunch | bữa ăn trưa |
| 1783 | lung | phổi |
| 1784 | machine | máy, máy móc |
| 1785 | machinery | máy móc, thiết bị |
| 1786 | mad | điên, mất trí, bực điên người |
| 1787 | magazine | tạp chí |
| 1788 | magic | ma thuật, ảo thuật, (thuộc) ma thuật, ảo thuật |
| 1789 | mail | thư tư, bưu kiện, gửi qua bưu điệ |
| 1790 | main | chính, chủ yếu, trọng yếu nhất |
| 1791 | mainly | chính, chủ yếu, phần lớn |
| 1792 | maintain | giữ gìn, duy trì, bảo vệ |
| 1793 | major | lớn, nhiều hơn, trọng đại, chủ yếu |
| 1794 | majority | phần lớn, đa số, ưu thế |
| 1795 | make | làm, chế tạo, sự chế tạo. |
| 1796 | make st up | làm thành, cấu thành, gộp thành |
| 1797 | make friends with | kết bạn với |
| 1798 | make-up | đồ hóa trang, son phấn |
| 1799 | male | trai, trống, đực, con trai, đàn ông, con trống, đực |
| 1800 | mall | búa |
| 1801 | man | con người, đàn ông |
| 1802 | manage | quản lý, trông nom, điều khiển |
| 1803 | management | sự quản lý, sự trông nom, sự điều khiển |
| 1804 | manager | người quản lý, giám đốc |
| 1805 | manner | cách, lối, kiểu, dáng, vẻ, thái độ |
| 1806 | manufacture | sản xuất, chế tạo |
| 1807 | manufacturer | người chế tạo, người sản xuất |
| 1808 | manufacturing | sự sản xuất, sự chế tạo |
| 1809 | many | nhiều |
| 1810 | map | bản đồ |
| 1811 | March (abbr Mar) | tháng ba |
| 1812 | mark | dấu, nhãn, nhãn mác, đánh dấu, ghi dấu |
| 1813 | market | chợ, thị trường |
| 1814 | marketing | ma-kết-tinh |
| 1815 | marriage | sự cưới xin, sự kết hôn, lễ cưới |
| 1816 | married | cưới, kết hôn |
| 1817 | marry | cưới (vợ), lấy (chồng) |
| 1818 | mass | khối, khối lượng, quần chúng, đại chúng |
| 1819 | massive | to lớn, đồ sộ |
| 1820 | master | chủ, chủ nhân, thầy giáo, thạc sĩ |
| 1821 | match | trận thi đấu, đối thủ, địch thủ, đối chọi, sánh được |
| 1822 | matching | tính địch thù, thi đấu |
| 1823 | mate | bạn, bạn nghề, giao phối |
| 1824 | material | nguyên vật liệu, vật chất, hữu hình |
| 1825 | mathematics, also maths | toán học, môn toán |
| 1826 | matter | chất, vật chất, có ý nghĩa, có tính chất quan trọng |
| 1827 | maximum | cực độ, tối đa, trị số cực đại, lượng cực đại, cực độ |
| 1828 | may | có thể, có lẽ |
| 1829 | maybe | có thể, có lẽ |
| 1830 | mayor | thị trưởng |
| 1831 | me | tôi, tao, tớ |
| 1832 | meal | bữa ăn |
| 1833 | mean | nghĩa, có nghĩa là |
| 1834 | meaning | ý, ý nghĩa |
| 1835 | means | của cải, tài sản, phương tiện. |
| 1836 | by means of which | (bằng cách đó) The process by means of which they make glass |
| 1837 | by means of | (bằng cách) He achieved success by means of hard work. (Anh ấy đạt được thành công bằng cách chăm chỉ). |
| 1838 | meanwhile | trong lúc đó, trong lúc ấy |
| 1839 | measure | đo, đo lường, sự đo lường, đơn vị đo lường |
| 1840 | measurement | sự đo lường, phép đo |
| 1841 | meat | thịt |
| 1842 | media | phương tiện truyền thông đại chúng |
| 1843 | medical | (thuộc) y học |
| 1844 | medicine | y học, y khoa, thuốc |
| 1845 | medium | trung bình, trung, vưa, sự trung gian, sự môi giới |
| 1846 | meet | gặp, gặp gỡ |
| 1847 | meeting | cuộc mít tinh, cuộc biểu tình |
| 1848 | melt | tan ra, chảy ra, làm tan chảy ra |
| 1849 | member | thành viên, hội viên |
| 1850 | membership | tư cách hội viên, địa vị hội viên |
| 1851 | memory | bộ nhớ, trí nhớ, kỉ niệm. |
| 1852 | in memory of | sự tưởng nhớ |
| 1853 | mental | (thuộc) trí tuệ, trí óc, mất trí |
| 1854 | mentally | về mặt tinh thần |
| 1855 | mention | kể ra, nói đến, đề cập |
| 1856 | menu | thực đơn |
| 1857 | mere | chỉ là |
| 1858 | merely | chỉ, đơn thuần |
| 1859 | mess | tình trạng bưa bộn, tình trạng lộn xộn, người nhếch nhác, bẩn thỉu |
| 1860 | message | tin nhắn, thư tín, điện thông báo, thông điệp |
| 1861 | metal | kim loại |
| 1862 | method | phương pháp, cách thức |
| 1863 | metre | mét |
| 1864 | mid- | tiền tố, một nửa |
| 1865 | midday | trưa, buổi trưa |
| 1866 | middle | giữa, ở giữa |
| 1867 | midnight | nửa đêm, 12h đêm |
| 1868 | might | qk. may có thể, có lẽ |
| 1869 | mild | nhẹ, êm dịu, ôn hòa |
| 1870 | mile | dặm (đo lường) |
| 1871 | military | (thuộc) quân đội, quân sự |
| 1872 | milk | sữa |
| 1873 | milligram, milligramme (abbr mg) | mi-li-gam |
| 1874 | millimetre, millimeter (abbr mm) | mi-li-met |
| 1875 | mind | tâm trí, tinh thần, trí tuệ, chú ý, để ý, chăm sóc, quan tâm |
| 1876 | mine | của tôi |
| 1877 | mineral | công nhân, thợ mỏ, khoáng |
| 1878 | minimum | tối thiểu, số lượng tối thiểu, mức tối thiểu |
| 1879 | minister | bộ trưởng |
| 1880 | ministry | bộ |
| 1881 | minor | nhỏ hơn, thứ yếu, không quan trọng |
| 1882 | minority | phần ít, thiểu số |
| 1883 | minute | phút |
| 1884 | mirror | gương |
| 1885 | miss | lỡ, trượt, sự trượt, sự thiếu vắng |
| 1886 | missing | vắng, thiếu, thất lạc |
| 1887 | mistake | lỗi, sai lầm, lỗi lầm, phạm lỗi, phạm sai lầm |
| 1888 | mistaken | sai lầm, hiểu lầm |
| 1889 | mix | pha, trộn lẫn, sự pha trộn |
| 1890 | mixed | lẫn lộn, pha trộn |
| 1891 | mixture | sự pha trộn, sự hỗn hợp |
| 1892 | mobile | chuyển động, di động |
| 1893 | mobile phone (mobile) | điện thoại đi động |
| 1894 | model | mẫu, kiểu mẫu |
| 1895 | modern | hiện đại, tân tiến |
| 1896 | moment | chốc, lát |
| 1897 | Monday (abbr Mon) | thứ 2 |
| 1898 | money | tiền |
| 1899 | monitor | lớp trưởng, màn hình máy tính, nghe, ghi phát thanh, giám sát |
| 1900 | month | tháng |
| 1901 | moon | mặt trăng |
| 1902 | moral | (thuộc) đạo đức, luân lý, phẩm hạnh, có đạo đức |
| 1903 | morally | có đạo đức |
| 1904 | more | hơn, nhiều hơn |
| 1905 | moreover | hơn nữa, ngoài ra, vả lại |
| 1906 | morning | buổi sáng |
| 1907 | most | lớn nhất, nhiều nhất, nhất, hơn cả |
| 1908 | mostly | hầu hết, chủ yếu là |
| 1909 | mother | mẹ |
| 1910 | motion | sự chuyển động, sụ di động |
| 1911 | motor | động cơ mô tô |
| 1912 | motorcycle | xe mô tô |
| 1913 | mount | leo, trèo, núi |
| 1914 | mountain | núi |
| 1915 | mouse | chuột |
| 1916 | mouth | miệng |
| 1917 | move | di chuyển, chuyển động, sự di chuyển, sự chuyển động |
| 1918 | movement | sự chuyển động, sự hoạt động, c động, động tác |
| 1919 | movie | phim xi nê |
| 1920 | movie theater | rạp chiếu phim |
| 1921 | moving | động, hoạt động |
| 1922 | Mr | Ông, ngài |
| 1923 | Mrs | Cô |
| 1924 | Ms | Bà, Cô |
| 1925 | much | nhiều, lắm |
| 1926 | mud | bùn |
| 1927 | multiply | nhân lên, làm tăng lên nhiều lần, sinh sôi nảy nở |
| 1928 | mum | mẹ |
| 1929 | murder | tội giết người, tội ám sát, giết người, ám sát |
| 1930 | muscle | cơ, bắp thịt |
| 1931 | museum | bảo tàng |
| 1932 | music | nhạc, âm nhạc |
| 1933 | musical | (thuộc) nhạc, âm nhạc, du dương êm ái |
| 1934 | musician | nhạc sĩ |
| 1935 | must | phải, cần, nên làm |
| 1936 | my | của tôi |
| 1937 | myself | tự tôi, chính tôi |
| 1938 | mysterious | thần bí, huyền bí, khó hiểu |
| 1939 | mystery | điều huyền bí, điều thần bí |
| 1940 | nail | móng (tay, chân) móng vuốt |
| 1941 | naked | trần, khỏa thân, trơ trụi |
| 1942 | name | tên, đặt tên, gọi tên |
| 1943 | narrow | hẹp, chật hẹp |
| 1944 | nation | dân tộc, quốc gia |
| 1945 | national | (thuộc) quốc gia, dân tộc |
| 1946 | natural | (thuộc) tự nhiên, thiên nhiên |
| 1947 | naturally | vốn, tự nhiên, đương nhiên |
| 1948 | nature | tự nhiên, thiên nhiên |
| 1949 | navy | hải quân |
| 1950 | near | gần, cận, ở gần |
| 1951 | nearby | gần |
| 1952 | nearly | gần, sắp, suýt |
| 1953 | neat | sạch, ngăn nắp, rành mạch |
| 1954 | neatly | gọn gàng, ngăn nắp |
| 1955 | necessarily | tất yếu, nhất thiết |
| 1956 | necessary | cần, cần thiết, thiết yếu |
| 1957 | neck | cổ |
| 1958 | need | cần, đòi hỏi, sự cần |
| 1959 | needle | cái kim, mũi nhọn |
| 1960 | negative | phủ định |
| 1961 | neighbour | hàng xóm |
| 1962 | neighbourhood | hàng xóm, làng giềng |
| 1963 | neither | không này mà cũng không kia |
| 1964 | nephew | cháu trai (con anh, chị, em) |
| 1965 | nerve | khí lực, thần kinh, can đảm |
| 1966 | nervous | hoảng sợ, dễ bị kích thích, hay lo lắng |
| 1967 | nervously | bồn chồn, lo lắng |
| 1968 | nest | tổ, ổ, làm tổ |
| 1969 | net | lưới, mạng |
| 1970 | network | mạng lưới, hệ thống |
| 1971 | never | không bao giờ, không khi nào |
| 1972 | nevertheless | tuy nhiên, tuy thế mà |
| 1973 | new | mới, mới mẻ, mới lạ |
| 1974 | newly | mới |
| 1975 | news | tin, tin tức |
| 1976 | newspaper | báo |
| 1977 | next | sát, gần, bên cạnh, lần sau, tiếp nữa. |
| 1978 | next to | Sát cạnh, Gần như |
| 1979 | nice | đẹp, thú vị, dễ chịu |
| 1980 | nicely | thú vị, dễ chịu |
| 1981 | niece | cháu gái |
| 1982 | night | đêm, tối |
| 1983 | no | không |
| 1984 | nobody (noone) | không ai, không người nào |
| 1985 | noise | tiếng ồn, sự huyên náo |
| 1986 | noisily | ồn ào, huyên náo |
| 1987 | noisy | ồn ào, huyên náo |
| 1988 | non- | không |
| 1989 | none | không ai, không người, vật gì |
| 1990 | nonsense | lời nói vô lý, vô nghĩa |
| 1991 | nor | cũng không |
| 1992 | normal | thường, bình thường, tình trạng bình thường |
| 1993 | normally | thông thường, như thường lệ |
| 1994 | north | phía bắc, phương bắc |
| 1995 | northern | Bắc |
| 1996 | nose | mũi |
| 1997 | not | không |
| 1998 | note | lời ghi, lời ghi chép, ghi chú, ghi chép |
| 1999 | nothing | không gì, không cái gì |
| 2000 | notice | thông báo, yết thị, chú ý, để ý, nhận biết. take notice of chú ý |
| 2001 | noticeable | đáng chú ý, đáng để ý |
| 2002 | novel | tiểu thuyết, truyện |
| 2003 | November (abbr Nov) | tháng 11 |
| 2004 | now | bây giờ, hiện giờ, hiện nay |
| 2005 | nowhere | không nơi nào, không ở đâu |
| 2006 | nuclear | (thuộc) hạt nhân |
| 2007 | number (abbr No) | số |
| 2008 | nurse | y tá |
| 2009 | nut | quả hạch, đầu |
| 2010 | o clock | đúng giờ |
| 2011 | obey | vâng lời, tuân theo, tuân lệnh |
| 2012 | object | vật, vật thể, đối tượng, phản đối,chống lại |
| 2013 | objective | mục tiêu, mục đích, (thuộc) mục tiêu, khách quan |
| 2014 | observation | sự quan sát, sự theo dõi |
| 2015 | observe | quan sát, theo dõi |
| 2016 | obtain | đạt được, giành được |
| 2017 | obvious | rõ ràng, rành mạch, hiển nhiên |
| 2018 | obviously | một cách rõ ràng, có thể thấy được |
| 2019 | occasion | dịp, cơ hội |
| 2020 | occasionally | thỉnh thoảng, đôi khi |
| 2021 | occupied | đang sử dụng, đầy (người) |
| 2022 | occupy | giữ, chiếm lĩnh, chiếm giữ |
| 2023 | occur | xảy ra, xảy đến, xuất hiện |
| 2024 | ocean | đại dương |
| 2025 | October (abbr Oct) | tháng 10 |
| 2026 | odd | kỳ quặc, kỳ cục, lẻ (số) |
| 2027 | oddly | kỳ quặc, kỳ cục, lẻ (số) |
| 2028 | of | của |
| 2029 | off | tắt, khỏi, cách, rời |
| 2030 | offence | sự vi phạm, sự phạm tội |
| 2031 | offend | xúc phạm, làm bực mình, làm khó chịu |
| 2032 | offensive | sự tấn công, cuộc tấn công, sỉ nhục |
| 2033 | offer | biếu, tặng, cho, sự trả giá |
| 2034 | office | cơ quấn, văn phòng, bộ |
| 2035 | officer | viên chức, cảnh sát, sĩ quấn |
| 2036 | official | (thuộc) chính quyền, văn phòng, viên chức, công chức |
| 2037 | officially | một cách trịnh trọng, một cách chính thức |
| 2038 | often | thường, hay, luôn |
| 2039 | oh | chao, ôi chao, chà, này.. |
| 2040 | oil | dầu |
| 2041 | OK (okay) | đồng ý, tán thành |
| 2042 | old | già |
| 2043 | old-fashioned | lỗi thời |
| 2044 | on | trên, ở trên, tiếp tục, tiếp diễn |
| 2045 | once | một lần, khi mà, ngay khi, một khi |
| 2046 | one number | một, một người, một vật nào đó |
| 2047 | onion | củ hành |
| 2048 | only | chỉ có 1, duy nhất, chỉ, mới |
| 2049 | onto | về phía trên, lên trên |
| 2050 | open | mở, ngỏ, mở, bắt đầu, khai mạc |
| 2051 | opening | khe hở, lỗ, sự bắt đầu, sự khai mạc, lễ khánh thành |
| 2052 | openly | công khai, thẳng thắn |
| 2053 | operate | hoạt động, điều khiển |
| 2054 | operation | sự hoạt động, quá trình hoạt động |
| 2055 | opinion | ý kiến, quan điểm |
| 2056 | opponent | địch thủ, đối thủ, kẻ thù |
| 2057 | opportunity | cơ hội, thời cơ |
| 2058 | oppose | đối kháng, đối chọi, đối lập, chống đối, phản đối |
| 2059 | opposed to | chống lại, phản đối |
| 2060 | opposing | tính đối kháng, đối chọi |
| 2061 | opposite | đối nhau, ngược nhau, trước mặt, đối diện, điều trái ngược |
| 2062 | opposition | sự đối lập, sự đối nhau, sự chống lại, sự phản đối, phe đối lập |
| 2063 | option | sự lựa chọn |
| 2064 | orange | quả cam, có màu da cam |
| 2065 | order | thứ, bậc, ra lệnh. in order to hợp lệ |
| 2066 | ordinary | thường, thông thường |
| 2067 | organ | đàn óoc gan |
| 2068 | organization | tổ chức, cơ quan, sự tổ chức |
| 2069 | organize | tổ chức, thiết lập |
| 2070 | organized | có trật tự, ngăn nắp, được sắp xếp, được tổ chức |
| 2071 | origin | gốc, nguồn gốc, căn nguyên |
| 2072 | original | (thuộc) gốc, nguồn gốc, căn nguyên, nguyên bản |
| 2073 | originally | một cách sáng tạo, mới mẻ, độc đáo, khởi đầu, đầu tiên |
| 2074 | other | khác |
| 2075 | otherwise | khác, cách khác, nếu không thì..., mặt khác |
| 2076 | ought to | phải, nên, hẳn là |
| 2077 | our | của chúng ta, thuộc chúng ta, của chúng tôi, của chúng mình |
| 2078 | ours | của chúng ta, thuộc chúng ta, của chúng tôi, của chúng mình |
| 2079 | ourselves | bản thân chúng ta, bản thân chúng tôi, bản thân chúng mình, tự chúng mình |
| 2080 | out | ngoài, ở ngoài, ra ngoài |
| 2081 | outdoor | ngoài trời, ở ngoài |
| 2082 | outdoors | ở ngoài trời, ở ngoài nhà |
| 2083 | outer | ở phía ngoài, ở xa hơn |
| 2084 | outline | vẽ, phác tảo, đường nét, hình dáng, nét ngoài |
| 2085 | output | sự sản xuất, sản phẩm, sản lượng |
| 2086 | outside | bề ngoài, bên ngoài, ở ngoài, ngoài |
| 2087 | outstanding | nổi bật, đáng chú ý, còn tồn lại |
| 2088 | oven | lò (nướng) |
| 2089 | over | bên trên, vượt qua, lên, lên trên |
| 2090 | overall | toàn bộ, toàn thể, tất cả, bao gồm |
| 2091 | overcome | thắng, chiến thắng, khắc phục, đánh bại (khó khăn) |
| 2092 | owe | nợ, hàm ơn, có được (cái gì) |
| 2093 | own | của chính mình, tự mình, nhận, nhìn nhận |
| 2094 | owner | người chủ, chủ nhân |
| 2095 | p.m. (PM) | quá trưa, chiều, tối |
| 2096 | pace | bước chân, bước |
| 2097 | pack | gói, bọc, bó, gói |
| 2098 | package | gói đồ, bưu kiện, đóng gói, đóng kiện |
| 2099 | packaging | Bao bì, đóng gói |
| 2100 | pipe | ống dẫn (khí, nước...) |
| 2101 | pitch | sân (chơi các môn thể thao), đầu hắc ín |
| 2102 | pity | lòng thương hại, điều đáng tiếc, đáng thương |
| 2103 | place | nơi, địa điểm, quảng trường. |
| 2104 | take place | xảy ra, được cử hành, được tổ chức |
| 2105 | plain | ngay thẳng, đơn giản, chất phác |
| 2106 | plan | bản đồ, kế hoạch, vẽ bản đồ, lập kế hoạch, dự kiến |
| 2107 | plane | mặt phẳng, mặt bằng, máy bay |
| 2108 | planet | hành tinh |
| 2109 | planning | sự lập kế hoạch, sự quy hoạch |
| 2110 | plant | thực vật, sự mọc lên, trồng, gieo |
| 2111 | plastic | chất dẻo, làm bằng chất dẻo |
| 2112 | plate | bản, tấm kim loại |
| 2113 | platform | nền, bục, bệ, thềm, sân ga |
| 2114 | play | chơi, đánh, sự vui chơi, trò chơi, trận đấu |
| 2115 | player | người chơi 1 trò chơi nào đó (nhạc cụ) |
| 2116 | pleasant | vui vẻ, dễ thương, dịu dàng, thân mật |
| 2117 | pleasantly | vui vẻ, dễ thương, thân mật |
| 2118 | please | làm vui lòng, vưa lòng, mong... vui lòng, xin mời |
| 2119 | pleased | hài lòng |
| 2120 | pleasing | mang lại niềm vui thích, dễ chịu |
| 2121 | pleasure | niềm vui thích, điều thích thú, điều thú vị, ý muốn, ý thích |
| 2122 | plenty | nhiều (s.k.lượng), chỉ sự thưa, sự sung túc, sự p.phú |
| 2123 | plot | mảnh đất nhỏ, sơ đồ, đồ thị, đồ án, vẽ sơ đồ, dựng đồ án |
| 2124 | plug | nút (thùng, chậu, bồ(n)..), cái phíc cắm |
| 2125 | plus | cộng với (số, người...), dấu cộng, cộng, thêm vào |
| 2126 | pocket | túi (quần áo, trong xe hơi), túi tiền |
| 2127 | poem | bài thơ |
| 2128 | poetry | thi ca, chất thơ |
| 2129 | point | mũi nhọn, điểm, vót, làm nhọn, chấm (câu..) |
| 2130 | pointed | nhọn, có đầu nhọn |
| 2131 | poison | chất độc, thuốc độc, đánh thuốc độc, tẩm thuốc độc |
| 2132 | poisonous | độc, có chất độc, gây chết, bệnh |
| 2133 | pole | người Ba Lan, cực (nam châm, trái đat...) |
| 2134 | police | cảnh sát, công an |
| 2135 | policy | chính sách |
| 2136 | polish | nước bóng, nước láng, đánh bóng, làm cho láng |
| 2137 | polite | lễ phép, lịch sự |
| 2138 | politely | lễ phép, lịch sự |
| 2139 | political | về chính trị, về chính phủ, có tính chính trị |
| 2140 | politically | về mặt chính trị, khôn ngoan, thận trọng, sảo quyệt |
| 2141 | politician | nhà chính trị, chính khách |
| 2142 | politics | họat động chính trị, đời sống chính trị, quan điểm chính trị |
| 2143 | pollution | sự ô nhiễm |
| 2144 | pool | vũng nước, bể bơi, hồ bơi |
| 2145 | poor | nghèo |
| 2146 | pop | tiếp bốp, phong cách dân gian hiện đại, nổ bốp |
| 2147 | popular | có tính đại chúng, (thuộc) nhân dân, được nhiều người ưa chuộng |
| 2148 | population | dân cư, dân số, mật độ dân số |
| 2149 | port | cảng |
| 2150 | pose | đưa ra, đề ra, đặt, sự đặt, đề ra |
| 2151 | position | vị trí, chỗ |
| 2152 | positive | khẳng định, xác thực, rõ ràng, tích cực, lạc quan |
| 2153 | possess | có, chiếm hữu |
| 2154 | possession | quyền sở hữu, vật sở hữu |
| 2155 | possibility | khả năng, triển vọng |
| 2156 | possible | có thể, có thể thực hiện |
| 2157 | possibly | có lẽ, có thể, có thể chấp nhận được |
| 2158 | post | thư, bưu kiện, gửi thư |
| 2159 | post office | bưu điện |
| 2160 | pot | can, bình, lọ... |
| 2161 | potato | khoai tây |
| 2162 | potential | tiềm năng, khả năng, tiềm lực |
| 2163 | potentially | tiềm năng, tiềm ẩn |
| 2164 | pound | pao - đơn vị đo lường |
| 2165 | pour | rót, đổ, giội |
| 2166 | powder | bột, bụi |
| 2167 | power | khả năng, tài năng, năng lực, sức mạnh, nội lực, quyền lực |
| 2168 | powerful | hùng mạnh, hùng cường |
| 2169 | practical | thực tế |
| 2170 | practically | về mặt thực hành, thực tế |
| 2171 | practice | thực hành, thực tiễn |
| 2172 | practise | thực hành, tập luyện |
| 2173 | praise | sự ca ngợi, sự tán dương, lòng tôn kính, tôn thờ, khen ngợi, tán dương |
| 2174 | precise | rõ ràng, chính xác, tỉ mỉ, kỹ tính |
| 2175 | precisely | đúng, chính xác, cần thận |
| 2176 | predict | báo trước, tiên đoán, dự báo |
| 2177 | prefer | thích hơn |
| 2178 | preference | sự thích hơn, sự ưa hơn, cái đượ ưa thích hơn |
| 2179 | pregnant | mang thai, giàu trí tưởng tượng, sáng tạo |
| 2180 | premises | biệt thự |
| 2181 | preparation | sự sửa soạn, sự chuẩn bị |
| 2182 | prepare | sửa soạn, chuẩn bị |
| 2183 | prepared | đã được chuẩn bị |
| 2184 | presence | sự hiện diện, sự có mặt, người, vât hiện diện |
| 2185 | present | có mặt, hiện diện, hiện nay, hiện thời, bày tỏ, giới thiệu, trình bày |
| 2186 | presentation | bài thuyết trình, sự trình diện, sự giới thiệu |
| 2187 | preserve | bảo quản, giữ gìn |
| 2188 | president | hiệu trưởng, chủ tịnh, tổng thống |
| 2189 | press | sự ép, sự nén, sự ấn, ép, nén, bóp, ấn |
| 2190 | pressure | sức ép, áp lực, áp suất |
| 2191 | presumably | có thể được, có lẽ |
| 2192 | pretend | giả vờ, giả bộ, làm ra vẻ |
| 2193 | pretty | khá, vưa phải, xinh, xinh xắn,, đẹp |
| 2194 | prevent | ngăn cản, ngăn chặn, ngăn ngưa |
| 2195 | previous | vội vàng, hấp tấp, trước (vd. ngày hôm trước), ưu tiên |
| 2196 | previously | trước, trước đây |
| 2197 | price | giá |
| 2198 | pride | sự kiêu hãnh, sự hãnh diện, tính kiêu căng, tự phụ |
| 2199 | priest | linh mục, thầy tu |
| 2200 | primarily | trước hết, đầu tiên |
| 2201 | primary | nguyên thủy, đầu tiên, thời cổ đại, nguyên sinh, sơ cấp, tiểu học |
| 2202 | prime minister | thủ tướng |
| 2203 | prince | hoàn tử |
| 2204 | princess | công chúa |
| 2205 | principle | cơ bản, chủ yếu, nguyên lý, nguyên tắc |
| 2206 | print | in, xuất bản, sự in ra |
| 2207 | printer | máy in, thợ in |
| 2208 | printing | sự in, thuật in, kỹ sảo in |
| 2209 | prior | trước, ưu tiên |
| 2210 | priority | sự ưu tế, quyền ưu tiên |
| 2211 | prison | nhà tù |
| 2212 | prisoner | tù nhân |
| 2213 | private | cá nhân, riêng |
| 2214 | privately | riêng tư, cá nhân |
| 2215 | prize | giải, giải thưởng |
| 2216 | probable | có thể, có khả năng |
| 2217 | probably | hầu như chắc chắn |
| 2218 | problem | vấn đề, điều khó giải quyết |
| 2219 | procedure | thủ tục |
| 2220 | proceed | tiến lên, theo duổi, tiếp diễn |
| 2221 | process | quá trình, sự tiến triển, quy trình, chế biến, gia công, xử lý |
| 2222 | produce | sản xuất, chế tạo |
| 2223 | producer | nhà sản xuất |
| 2224 | product | sản phẩm |
| 2225 | production | sự sản xuất, chế tạo |
| 2226 | profession | nghề, nghề nghiệp |
| 2227 | professional | (thuộc) nghề, nghề nghiệp, chuyên nghiệp |
| 2228 | professor | giáo sư, giảng viên |
| 2229 | profit | thuận lợi, lợi ích, lợi nhuận |
| 2230 | program | chương trình, lên chương trình |
| 2231 | programme | chương trình |
| 2232 | progress | sự tiến tới, sự tiến triển, tiến bộ, tiến triển, phát triển |
| 2233 | project | đề án, dự án, kế hoạch, dự kiến, kế hoạch |
| 2234 | promise | hứa, lời hứa |
| 2235 | promote | thăng chức, thăng cấp |
| 2236 | promotion | sự thăng chức, sự thăng cấp |
| 2237 | prompt | mau lẹ, nhanh chóng, xúi, giục, nhắc nhở |
| 2238 | promptly | mau lẹ, ngay lập tức |
| 2239 | pronounce | tuyên bố, thông báo, phát âm |
| 2240 | pronunciation | sự phát âm |
| 2241 | proof | chứng, chứng cớ, bằng chứng, sự kiểm chứng |
| 2242 | proper | đúng, thích đáng, thích hợp |
| 2243 | properly | một cách đúng đắn, một cách thích đáng |
| 2244 | property | tài sản, của cải, đất đấi, nhà cửa, bất động sản |
| 2245 | proportion | sự cân xứng, sự cân đối |
| 2246 | proposal | sự đề nghị, đề xuất |
| 2247 | propose | đề nghị, đề xuat, đưa ra |
| 2248 | prospect | viễn cảnh, toàn cảnh, triển vọng, mong chờ |
| 2249 | protect | bảo vệ, che chở |
| 2250 | protection | sự bảo vệ, sự che chở |
| 2251 | protest | sự phản đối, sự phản kháng, phản đối, phản kháng |
| 2252 | proud | tự hào, kiêu hãnh |
| 2253 | proudly | một cách tự hào, một cách hãnh diện |
| 2254 | prove | chứng tỏ, chứng minh |
| 2255 | provide | chuẩn bị đầy đủ, dự phòng, cung cấp, chu cấp |
| 2256 | provided, providing | với điều kiện là, miễn là |
| 2257 | pub, publicyhouse | quán rượu, tiệm rượu |
| 2258 | public | chung, công cộng, công chúng, nhân dân. |
| 2259 | in public | giữa công chúng, công khai |
| 2260 | publication | sự công bố, sự xuất bản |
| 2261 | publicity | sự công khai, sự quảng cáo |
| 2262 | publicly | công khai, công cộng |
| 2263 | publish | công bố, ban bố, xuất bản |
| 2264 | publishing | công việc, nghề xuất bản |
| 2265 | pull | lôi, kéo, giật, sự lôi kéo, sự giật |
| 2266 | punch | đấm, thụi, quả đấm, cú thụi |
| 2267 | punish | phạt, trưng phạt |
| 2268 | punishment | sự trưng phạt, sự trưng trị |
| 2269 | pupil | học sinh |
| 2270 | purchase | sự mua, sự tậu, mua, sắm, tậu |
| 2271 | pure | nguyên chất, tinh khiết, trong lành |
| 2272 | purely | hoàn toàn, chỉ là |
| 2273 | purple | tía, có màu tía, màu tía |
| 2274 | purpose | mục đích, ý định. on purpose cố tình, cố ý, có chủ tâm |
| 2275 | pursue | đuổi theo, đuổi bắt |
| 2276 | push | xô đẩy, sự xô đẩy |
| 2277 | put | đặt, để, cho vào |
| 2278 | put sth on | mặc (áo), đội (mũ), đi (giày). put sth out tắt, dập tắt |
| 2279 | qualification | phẩm chất, năng lực, khả năng chuyên môn |
| 2280 | qualified | đủ tư cách, điều kiện, khả năng |
| 2281 | qualify | đủ khả năng, đủ tư cách, điều kiện |
| 2282 | quality | chất lượng, phẩm chất |
| 2283 | quantity | lượng, số lượng |
| 2284 | quarter | 1/4, 15 phút |
| 2285 | queen | nữ hoàng |
| 2286 | question | câu hỏi, hỏi, chất vấn |
| 2287 | quick | nhanh |
| 2288 | quickly | nhanh |
| 2289 | quiet | lặng, yên lặng, yên tĩnh |
| 2290 | quietly | lặng, yên lặng, yên tĩnh |
| 2291 | quit | thoát, thoát ra |
| 2292 | quite | hoàn toàn, hầu hết |
| 2293 | quote | trích dẫn |
| 2294 | race | loài, chủng, giống, cuộc đua, đua |
| 2295 | racing | cuộc đua |
| 2296 | radio | sóng vô tuyến, radio |
| 2297 | rail | đường ray |
| 2298 | railway | đường sắt |
| 2299 | rain | mưa, cơn mưa, mưa |
| 2300 | raise | nâng lên, đưa lên, ngẩng lên |
| 2301 | range | dãy, hàng, loại, phạm vi, trình độ |
| 2302 | rank | hàng, dãy, sắp xếp thành hàng, dãy |
| 2303 | rapid | nhanh, nhanh chóng |
| 2304 | rapidly | nhanh, nhanh chóng |
| 2305 | rare | hiếm, ít |
| 2306 | rarely | hiếm khi, ít khi |
| 2307 | rate | tỷ lệ, tốc độ |
| 2308 | rather | + Tính từ (khá/hơi). The film was rather boring. |
| 2309 | Rather...than | (hơn là) I would rather stay at home than go out tonight |
| 2310 | raw | sống (# chín), thô, còn nguyên chất |
| 2311 | re- | lại, nữa |
| 2312 | reach | đến, đi đến, tới |
| 2313 | react | tác động trở lại, phản ứng |
| 2314 | reaction | sự phản ứng, sự phản tác dụng |
| 2315 | read | đọc |
| 2316 | reader | người đọc, độc giả |
| 2317 | reading | sự đọc |
| 2318 | ready | sẵn sàng |
| 2319 | real | thực, thực tế, có thật |
| 2320 | realistic | hiện thực |
| 2321 | reality | sự thật, thực tế, thực tại |
| 2322 | realize | thực hiện, thực hành, thấy rõ, hiểu rõ, nhận thức rõ (việc gì...) |
| 2323 | really | thực, thực ra, thực sự |
| 2324 | rear | phía sau, ở đằng sau, ở đằng sau |
| 2325 | reason | lý do, lý lẽ |
| 2326 | reasonable | có lý, hợp lý |
| 2327 | reasonably | hợp lý |
| 2328 | recall | gọi về, triệu hồi, nhắc lại, gợi lại |
| 2329 | receipt | công thức, đơn thuốc |
| 2330 | receive | nhận, lĩnh, thu |
| 2331 | recent | gần đây, mới đây |
| 2332 | recently | gần đây, mới đây |
| 2333 | reception | sự nhận, sự tiếp nhận, sự đón tiế |
| 2334 | reckon | tính, đếm |
| 2335 | recognition | sự công nhận, sự thưa nhận |
| 2336 | recognize | nhận ra, nhận diện, công nhận, thưa nhận |
| 2337 | recommend | giới thiệu, tiến cử, đề nghị, khuyên bảo |
| 2338 | record | bản ghi, sự ghi, bản thu, sự thu, thu, ghi chép |
| 2339 | recording | sự ghi, sự thu âm |
| 2340 | recover | lấy lại, giành lại |
| 2341 | red | đỏ, màu đỏ |
| 2342 | reduce | giảm, giảm bớt |
| 2343 | reduction | sự giảm giá, sự hạ giá |
| 2344 | refer to | xem, tham khảo, ám chỉ, nhắc đế |
| 2345 | reference | sự tham khảo, hỏi ý kiến |
| 2346 | reflect | phản chiếu, phản hồi, phản ánh |
| 2347 | reform | cải cách, cải thiện, cải tạo, sự cải cách, sự cải thiện, cải tạo |
| 2348 | refrigerator | tủ lạnh |
| 2349 | refusal | sự từ chối, sự khước từ |
| 2350 | refuse | từ chối, khước từ |
| 2351 | regard | nhìn, đánh giá, cái nhìn, sự quan tâm, sự chú ý (lời chúc tụng cuối thư) |
| 2352 | regarding | về, về việc, đối với (vấn đề...) |
| 2353 | region | vùng, miền |
| 2354 | regional | vùng, địa phương |
| 2355 | register | đăng ký, ghi vào sổ, sổ, sổ sách, máy ghi |
| 2356 | regret | đáng tiếc, hối tiếc, lòng thương tiếc, sự hối tiếc |
| 2357 | regular | thường xuyên, đều đặn |
| 2358 | regularly | đều đặn, thường xuyên |
| 2359 | regulation | sự điều chỉnh, điều lệ, quy tắc |
| 2360 | reject | không chấp nhận, loại bỏ, bác bỏ |
| 2361 | relate | kể lại, thuật lại, liên hệ, liên quan |
| 2362 | related | có liên quan, có quan hệ với ai, cái gì |
| 2363 | relation | mối quan hệ, sự liên quan, liên lạc |
| 2364 | relationship | mối quan hệ, mối liên lạc |
| 2365 | relative | có liên quấn đến, người có họ, đạ từ quan hệ |
| 2366 | relatively | có liên quan, có quan hệ |
| 2367 | relax | giải trí, nghỉ ngơi |
| 2368 | relaxed | thanh thản, thoải mái |
| 2369 | relaxing | làm giảm, bớt căng thẳng |
| 2370 | release | làm nhẹ, bớt, thả, phóng thích, phát hành, sự giải thoát, thoát khỏi, sự thả, phóng thích, sự phát hành |
| 2371 | relevant | thích hợp, có liên quan |
| 2372 | relief | sự giảm nhẹ, sự làm cho khuây khỏa, sự trợ cấp, sự đền bù |
| 2373 | religion | tôn giáo |
| 2374 | religious | (thuộc) tôn giáo |
| 2375 | rely on | tin vào, tin cậy, tin tưởng vào |
| 2376 | remain | còn lại, vẫn còn như cũ |
| 2377 | remaining | còn lại |
| 2378 | remains | đồ thưa, cái còn lại |
| 2379 | remark | sự nhận xét, phê bình, sự để ý, chú ý, nhận xét, phê bình, để ý, chú ý |
| 2380 | remarkable | đáng chú ý, đáng để ý, khác thường |
| 2381 | remarkably | đáng chú ý, đáng để ý, khác thường |
| 2382 | remember | nhớ, nhớ lại |
| 2383 | remind | nhắc nhở, gợi nhớ |
| 2384 | remote | xa, xa xôi, xa cách |
| 2385 | removal | viêc di chuyển, việc dọn nhà, dời đi |
| 2386 | remove | dời đi, di chuyển |
| 2387 | rent | sự thuê mướn, cho thuê, thuê |
| 2388 | rented | được thuê, được mướn |
| 2389 | repair | sửa chữa, chỉnh tu, sự sửa chữa, sự chỉnh tu |
| 2390 | repeat | nhắc lại, lặp lại |
| 2391 | repeated | được nhắc lại, được lặp lại |
| 2392 | repeatedly | lặp đi lặp lại nhiều lần |
| 2393 | replace | thay thế |
| 2394 | reply | sự trả lời, sự hồi âm, trả lời, hồi âm |
| 2395 | report | báo cáo, tường trình, bản báo cáo, bản tường trình |
| 2396 | represent | miêu tả, hình dung, đại diện, thay mặt |
| 2397 | representative | điều tiêu biểu, tượng trưng, mẫu, miêu tả, biểu hiện, đại diện, tượng trưng |
| 2398 | reproduce | tái sản xuất |
| 2399 | reputation | sự nổi tiếng, nổi danh |
| 2400 | request | lời thỉnh cầu, lời đề nghị, yêu cầu, thỉnh cầu, đề nghị, yêu cầu |
| 2401 | require | đòi hỏi, yêu cầu, quy định |
| 2402 | requirement | nhu cầu, sự đòi hỏi, luật lệ, thủ tục |
| 2403 | rescue | giải thoát, cứu nguy, sự giải thoát, sự cứu nguy |
| 2404 | research | sự nghiên cứu |
| 2405 | reservation | sự hạn chế, điều kiện hạn chế |
| 2406 | reserve | dự trữ, để dành, đặt trước, đăng ký trước, sự dự trữ, sự để dành, sự đặt trước, sự đăng ký trước |
| 2407 | resident | người sinh sống, trú ngụ, khách trọ, có nhà ở, cư trú, thường trú |
| 2408 | resist | chống lại, phản đổi, kháng cự |
| 2409 | resistance | sự chống lại, sự phản đối, sự kháng cự |
| 2410 | resolve | quyết định, kiên quyết (làm gì), giải quyết (vấn đề, khó khă(n).) |
| 2411 | resort | kế sách, phương kế |
| 2412 | resource | tài nguyên, kế sách, thủ đoạn |
| 2413 | respect | sự kính trọng, sự lễ phép, tôn trọng, kính trọng, khâm phục |
| 2414 | respond | hưởng ứng, phản ứng lại, trả lời |
| 2415 | response | sự trả lời, câu trả lời, sự hưởng ứng, sự đáp lại |
| 2416 | responsibility | trách nhiệm, sự chịu trách nhiệm |
| 2417 | responsible | chịu trách nhiệm về, chịu trách nhiệm trước ai, gì |
| 2418 | rest | sự nghỉ ngơi, lúc nghỉ, nghỉ, nghỉ ngơi. the rest vật, cái còn lại, những người, cái khác |
| 2419 | restaurant | nhà hàng ăn, hiệu ăn |
| 2420 | restore | hoàn lại, trả lại, sửa chữa lại, phục hồi lại |
| 2421 | restrict | hạn chế, giới hạn |
| 2422 | restricted | bị hạn chế, có giới hạn, vùng cấm |
| 2423 | restriction | sự hạn chế, sự giới hạn |
| 2424 | result | kết quả, bởi, do.. mà ra, kết quả là... |
| 2425 | retain | giữ lại, nhớ được |
| 2426 | retire | rời bỏ, rút về, thôi, nghỉ việc, về hưu |
| 2427 | retired | ẩn dật, hẻo lánh, đã về hưu, đã nghỉ việc |
| 2428 | retirement | sự ẩn dật, nơi hẻo lánh, sự về hưu, sự nghỉ việc |
| 2429 | return | trở lại, trở về, sự trở lại, sự trở về |
| 2430 | reveal | bộc lộ, biểu lộ, tiết lộ, phát hiện, khám phá |
| 2431 | reverse | đảo, ngược lại, điều trái ngược, mặt trái |
| 2432 | review | sự xem lại, sự xét lại, làm lại, xem xét lại |
| 2433 | revise | đọc lại, xem lại, sửa lại, ôn lại |
| 2434 | revision | sự xem lại, sự đọc lại, sự sửa lại, sự ôn lại |
| 2435 | revolution | cuộc cách mạng |
| 2436 | reward | sự thưởng, phần thưởng, thưởng, thưởng công |
| 2437 | rhythm | nhịp điệu |
| 2438 | rice | gạo, thóc, cơm, cây lúa |
| 2439 | rich | giàu, giàu có |
| 2440 | rid | giải thoát |
| 2441 | get rid of | tống khứ |
| 2442 | ride | đi, cưỡi (ngựa), sự đi, đường đi |
| 2443 | rider | người cưỡi ngựa, người đi xe đạp |
| 2444 | ridiculous | buồn cười, lố bịch, lố lăng |
| 2445 | riding | môn thể thấo cưỡi ngựa, sự đi xe (bus, điện, xe đạp) |
| 2446 | right | thẳng, phải, tốt, ngấy, đúng, điều thiện, điều phải, tốt, bên phải |
| 2447 | rightly | đúng, phải, có lý |
| 2448 | ring | chiếc nhẫn, đeo nhẫn cho ai |
| 2449 | rise | sự lên, sự tăng lương, thăng cấp, dậy, đứng lên, mọc (mặt trời), thành đạt |
| 2450 | risk | sự liều, mạo hiểm, liều |
| 2451 | rival | đối thủ, địch thủ, đối địch, cạnh tranh |
| 2452 | river | sông |
| 2453 | road | con đường, đường phố |
| 2454 | rob | cướp, lấy trộm |
| 2455 | rock | đá |
| 2456 | role | vai (diễn), vai trò |
| 2457 | roll | cuốn, cuộn, sự lăn tròn, lăn, cuốn, quấn, cuộn |
| 2458 | romantic | lãng mạn |
| 2459 | roof | mái nhà, nóc |
| 2460 | roof | mái nhà, nóc |
| 2461 | room | phòng, buồng |
| 2462 | root | gốc, rễ |
| 2463 | rope | dây cáp, dây thưng, xâu, chuỗi |
| 2464 | rough | gồ ghề, lởm chởm |
| 2465 | roughly | gồ ghề, lởm chởm |
| 2466 | round | tròn, vòng quanh, xung quanh |
| 2467 | rounded | bị làm thành tròn, phát triển đầy đủ |
| 2468 | route | đường đi, lộ trình, tuyến đường |
| 2469 | routine | thói thường, lệ thường, thủ tục, thường lệ, thông thường |
| 2470 | row | hàng, dãy |
| 2471 | royal | (thuộc) vua, nữ hoàng, hoàng gia |
| 2472 | rub | cọ xát, xoa bóp, nghiền, tán |
| 2473 | rubber | cao su |
| 2474 | rubbish | vật vô giá trị, bỏ đi, rác rưởi |
| 2475 | rude | bất lịch sự, thô lỗ, thô sơ, đơn giản |
| 2476 | rudely | bất lịch sự, thô lỗ, thô sơ, đơn giản |
| 2477 | ruin | làm hỏng, làm đổ nát, làm phá sản, sự hỏng, sự đổ nát, sự phá sản |
| 2478 | ruined | bị hỏng, bị đổ nát, bị phá sản |
| 2479 | rule | quy tắc, điều lệ, luật lệ, cai trị, chỉ huy, điều khiển |
| 2480 | ruler | người cai trị, người trị vì, thước kẻ |
| 2481 | rumour | tin đồn, lời đồn |
| 2482 | run | chạy, sự chạy |
| 2483 | runner | người chạy |
| 2484 | running | sự chạy, cuộc chạy đua |
| 2485 | rural | (thuộc) nông thôn, vùng nông thôn |
| 2486 | rush | xông lên, lao vào, xô đẩy, sự xông lên, sự lao vào, sự xô đẩy |
| 2487 | sack | bao tải, đóng bao, bỏ vào bao |
| 2488 | sad | buồn, buồn bã |
| 2489 | sadly | một cách buồn bã, đáng buồn là, không may mà |
| 2490 | sadness | sự buồn rầu, sự buồn bã |
| 2491 | safe | an toàn, chắc chắn, đáng tin |
| 2492 | safely | an toàn, chắc chắn, đáng tin |
| 2493 | safety | sự an toàn, sự chắc chăn |
| 2494 | sail | đi tàu, thuyền, nhổ neo, buồm, cánh buồm, chuyến đi bằng thuyền buồm |
| 2495 | sailing | sự đi thuyền |
| 2496 | sailor | thủy thủ |
| 2497 | salad | sa lát (xà lách trộng dầu dấm), rau sống |
| 2498 | salary | tiền lương |
| 2499 | sale | việc bán hàng |
| 2500 | salt | muối |
| 2501 | same | đều đều, đơn điệu, cũng như thế, vẫn cái đó |
| 2502 | sample | mẫu, hàng mẫu |
| 2503 | sand | cát |
| 2504 | satisfaction | sự làm cho thỏa mãn, toại nguyện sự trả nợ, bồi thường |
| 2505 | satisfied | cảm thấy hài lòng, vưa ý, thoả mãn |
| 2506 | satisfy | làm thỏa mãn, hài lòng, trả (nợ), chuộc tội |
| 2507 | satisfying | đem lại sự thỏa mãn, làm thỏa mãn, làm vưa ý |
| 2508 | Saturday (abbr Sat) | thứ 7 |
| 2509 | sauce | nước xốt, nước chấm |
| 2510 | save | cứu, lưu |
| 2511 | saving | sự cứu, sự tiết kiệm |
| 2512 | say | nói |
| 2513 | scale | vảy (cá..), tỷ lệ |
| 2514 | scare | làm kinh hãi, sợ hãi, dọa, sự sợ hãi, sự kinh hoàng |
| 2515 | scared | bị hoảng sợ, bị sợ hãi |
| 2516 | scene | cảnh, phong cảnh |
| 2517 | schedule | kế hoạch làm việc, bản liệt kê, lên thời khóa biểu, lên kế hoạch |
| 2518 | scheme | sự sắp xếp, sự phối hợp, kế hoạch thực hiện, lược đồ, sơ đồ |
| 2519 | school | đàn cá, bầy cá, trường học, học đường |
| 2520 | science | khoa học, khoa học tự nhiên |
| 2521 | scientific | (thuộc) khoa học, có tính khoa họ |
| 2522 | scientist | nhà khoa học |
| 2523 | scissors | cái kéo |
| 2524 | score | điểm số, bản thắng, tỷ số, đạt được, thành công, cho điểm |
| 2525 | scratch | cào, làm xước da, sự cào, sự trầy xước da |
| 2526 | scream | gào thét, kêu lên, tiếng thét, tiếng kêu to |
| 2527 | screen | màn che, màn ảnh, màn hình, phim ảnh nói chung |
| 2528 | screw | đinh vít, đinh ốc, bắt vít, bắt ốc |
| 2529 | sea | biển |
| 2530 | seal | hải cẩu, săn hải cẩu |
| 2531 | search | sự tìm kiếm, sự thăm dò, sự điều tra, tìm kiếm, thăm dò, điều tra |
| 2532 | season | mùa |
| 2533 | seat | ghế, chỗ ngồi |
| 2534 | second | thứ hai, ở vị trí thứ 2, thứ nhì, người về nhì |
| 2535 | secondary | trung học, thứ yếu |
| 2536 | secret | bí mật, điều bí mật |
| 2537 | secretary | thư ký |
| 2538 | secretly | bí mật, riêng tư |
| 2539 | section | mục, phần |
| 2540 | sector | khu vực, lĩnh vực |
| 2541 | secure | chắc chắn, đảm bảo, bảo đảm, giữ an ninh |
| 2542 | security | sự an toàn, sự an ninh |
| 2543 | see | nhìn, nhìn thấy, quan sát |
| 2544 | seed | hạt, hạt giống |
| 2545 | seek | tìm, tìm kiếm, theo đuổi |
| 2546 | seem linking | có vẻ như, dường như |
| 2547 | select | chọn lựa, chọn lọc |
| 2548 | selection | sự lựa chọn, sự chọc lọc |
| 2549 | self | bản thân mình |
| 2550 | self- | tự bản thân mình, cái tôi |
| 2551 | sell | bán |
| 2552 | senate | thượng nghi viện, ban giám hiệu |
| 2553 | senator | thượng nghị sĩ |
| 2554 | send | gửi, phái đi |
| 2555 | senior | nhiều tuổi hơn, dành cho trẻ em trên 11t, người lớn tuổi hơn, sinh viên năm cuối trường trung học, cao đẳng |
| 2556 | sense | giác quan, tri giác, cảm giác |
| 2557 | sensible | có óc xét đoán, hiểu, nhận biết được |
| 2558 | sensitive | dễ bị thương, dễ bị hỏng, dễ bị xúc phạm |
| 2559 | sentence | câu |
| 2560 | separate | khác nhau, riêng biệt, làm rời, tác ra, chia tay |
| 2561 | separated | ly thân |
| 2562 | separately | không cùng nhau, thành người riêng, vật riêng |
| 2563 | separation | sự chia cắt, phân ly, sự chia tay, l thân |
| 2564 | September | tháng 9 |
| 2565 | series | loạt, dãy, chuỗi |
| 2566 | serious | đứng đắn, nghiêm trang |
| 2567 | seriously | đứng đắn, nghiêm trang |
| 2568 | servant | người hầu, đầy tớ |
| 2569 | serve | phục vụ, phục sự |
| 2570 | service | sự phục vụ, sự hầu hạ |
| 2571 | session | buổi họp, phiên họp, buổi, phiên |
| 2572 | set | bộ, bọn, đám, lũ, đặt để, bố trí |
| 2573 | settle | giải quyết, dàn xếp, hòa giải, đặt, bố trí |
| 2574 | several | vài |
| 2575 | severe | khắt khe, gay gắt (thái độ, cư xử), giản dị, mộc mạc (kiểu cách, trang phục, dung nhan) |
| 2576 | severely | khắt khe, gay gắt (thái độ, cư xử), giản dị, mộc mạc (kiểu cách, trang phục, dung nhan) |
| 2577 | sew | may, khâu |
| 2578 | sewing | sự khâu, sự may vá |
| 2579 | sex | giới, giống |
| 2580 | sexual | giới tính, các vấn đề sinh lý |
| 2581 | sexually | giới tính, các vấn đề sinh lý |
| 2582 | shade | bóng, bóng tối |
| 2583 | shadow | bóng, bóng tối, bóng râm, bóng mát |
| 2584 | shake | rung, lắc, giũ, sự rung, sự lắc, sự giũ |
| 2585 | shall | dự đoán tương lai, sẽ |
| 2586 | shallow | nông, cạn |
| 2587 | shame | sự xấu hổ, thẹn thùng, sự ngượng |
| 2588 | shape | hình, hình dạng, hình thù |
| 2589 | shaped | có hình dáng được chỉ rõ |
| 2590 | share | đóng góp, tham gia, chia sẻ, phần đóng góp, phần tham gia, phần chia sẻ |
| 2591 | sharp | sắc, nhọn, bén |
| 2592 | sharply | sắc, nhọn, bén |
| 2593 | shave | cạo (râu), bào, đẽo (gỗ) |
| 2594 | she | nó, bà ấy, chị ấy, cô ấy... |
| 2595 | sheep | con cừu |
| 2596 | sheet | chăn, khăn trải giường, lá, tấm, phiến, tờ |
| 2597 | shelf | kệ, ngăn, giá |
| 2598 | shell | vỏ, mai, vẻ bề ngoài |
| 2599 | shelter | sự nương tựa, sự che chở, sự ẩn náu, che chở, bảo vệ |
| 2600 | shift | đổi chỗ, dời chỗ, chuyển, giao, sự thấy đổi, sự luân phiên |
| 2601 | shine | chiếu sáng, tỏa sáng |
| 2602 | shiny | sáng chói, bóng |
| 2603 | ship | tàu, tàu thủy |
| 2604 | shirt | áo sơ mi |
| 2605 | shock | sự đụng chạm, va chạm, sự kích động, sự choáng, chạm mạnh, va mạnh, gây sốc |
| 2606 | shocked | bị kích động, bị va chạm, bị sốc |
| 2607 | shocking | gây ra căm phẫn, tồi tệ, gây kích động |
| 2608 | shoe | giày |
| 2609 | shoot | vụt qua, chạy qua, ném, phóng, bắn, đâm ra, trồi ra |
| 2610 | shooting | sự bắn, sự phóng đi |
| 2611 | shop | cửa hàng, đi mua hàng, đi chợ |
| 2612 | shopping | sự mua sắm |
| 2613 | short | ngắn, cụt |
| 2614 | shortly | trong thời gian ngắn, sớm |
| 2615 | shot | đạn, viên đạn |
| 2616 | should | nên |
| 2617 | shoulder | vai |
| 2618 | shout | hò hét, reo hò, sự la hét, sự hò reo |
| 2619 | show | biểu diễn, trưng bày, sự biểu diễn sự bày tỏ |
| 2620 | shower | vòi hoa sen, sự tắm vòi hoa sen |
| 2621 | shut | đóng, khép, đậy, tính khép kín |
| 2622 | shy | nhút nhát, e thẹn |
| 2623 | sick | ốm, đau, bệnh |
| 2624 | side | mặt, mặt phẳng |
| 2625 | sideways | ngang, từ một bên, sang bên |
| 2626 | sight | cảnh đẹp, sự nhìn |
| 2627 | sign | dấu, dấu hiệu, kí hiệu, đánh dấu, viết ký hiệu |
| 2628 | signal | dấu hiệu, tín hiệu, ra hiệu, báo hiệu |
| 2629 | signature | chữ ký |
| 2630 | significant | nhiều ý nghĩa, quan trọng |
| 2631 | significantly | đáng kể |
| 2632 | silence | sự im lặng, sự yên tĩnh |
| 2633 | silent | im lặng, yên tĩnh |
| 2634 | silk | tơ, chỉ, lụa |
| 2635 | silly | ngớ ngẩn, ngu ngốc, khờ dại |
| 2636 | silver | bạc, đồng bạc, làm bằng bạc, trắng như bạc |
| 2637 | similar | giống như, tương tự như |
| 2638 | similarly | tương tự, giống nhau |
| 2639 | simple | đơn, đơn giản, dễ dàng |
| 2640 | simply | một cách dễ dàng, giản dị |
| 2641 | since | từ, từ khi, từ lúc đó, từ đó, từ lúc ấy |
| 2642 | sincere | thật thà, thẳng thắng, chân thành |
| 2643 | sincerely | một cách chân thành |
| 2644 | sing | hát, ca hát |
| 2645 | singer | ca sĩ |
| 2646 | singing | sự hát, tiếng hát |
| 2647 | single | đơn, đơn độc, đơn lẻ |
| 2648 | sink | chìm, lún, đắm |
| 2649 | sir | xưng hô lịch sự Ngài, Ông |
| 2650 | sister | chị, em gái |
| 2651 | sit | ngồi. |
| 2652 | sit down | ngồi xuống |
| 2653 | situation | hoàn cảnh, địa thế, vị trí |
| 2654 | size | cỡ. đã được định cỡ |
| 2655 | skilful | tài giỏi, khéo tay |
| 2656 | skilfully | tài giỏi, khéo tay |
| 2657 | skill | kỹ năng, kỹ sảo |
| 2658 | skilled | có kỹ năng, có kỹ sảo, khẻo tay, có kinh nghiệm,, lành nghề |
| 2659 | skin | da, vỏ |
| 2660 | skirt | váy, đầm |
| 2661 | sky | trời, bầu trời |
| 2662 | sleep | ngủ, giấc ngủ |
| 2663 | sleeve | tay áo, ống tay |
| 2664 | slice | miếng, lát mỏng, cắt ra thành miếng mỏng, lát mỏng |
| 2665 | slide | trượtc, chuyển động nhẹ, lướt qua |
| 2666 | slight | mỏng manh, thon, gầy |
| 2667 | slightly | mảnh khảnh, mỏng manh, yếu ớt |
| 2668 | slip | trượt, tuột, trôi qua, chạy qua |
| 2669 | slope | dốc, đường dốc, độ dốc, nghiêng, dốc |
| 2670 | slow | chậm, chậm chạp |
| 2671 | slowly | một cách chậm chạp, chậm dần |
| 2672 | small | nhỏ, bé |
| 2673 | smart | mạnh, ác liệt, khéo léo, khôn khéo |
| 2674 | smash | đập, vỡ tan thành mảnh, sự đập, vỡ tàn thành mảnh |
| 2675 | smell | ngửi, sự ngửi, khứu giác |
| 2676 | smile | cười, mỉm cười, nụ cười, vẻ tươi cười |
| 2677 | smoke | khói, hơi thuốc, hút thuốc, bốc khói, hơi |
| 2678 | smoking | sự hút thuốc |
| 2679 | smooth | nhẵn, trơn, mượt mà |
| 2680 | smoothly | một cách êm ả, trôi chảy |
| 2681 | snake | con rắn, người nham hiểm, xảo tr |
| 2682 | snow | tuyết, tuyết rơi |
| 2683 | so | như vậy, như thế, vì thế, vì vậy, vì thế cho nên so thất để, để cho, để mà |
| 2684 | soap | xà phòng |
| 2685 | social | có tính xã hội |
| 2686 | socially | có tính xã hội |
| 2687 | society | xã hội |
| 2688 | sock | tất ngắn, miếng lót giày |
| 2689 | soft | mềm, dẻo |
| 2690 | softly | một cách mềm dẻo |
| 2691 | software | phần mềm (m.tính) |
| 2692 | soil | đất trồng, vết bẩn |
| 2693 | soldier | lính, quân nhân |
| 2694 | solid | rắn, thể rắn, chất rắn |
| 2695 | solution | sự giải quyết, giải pháp |
| 2696 | solve | giải, giải thích, giải quyết |
| 2697 | some | một it, một vài |
| 2698 | somebody, someone | người nào đó |
| 2699 | somehow | không biết làm sao, bằng cách này hay cách khác |
| 2700 | something | một điều gì đó, một việc gì đó, mộ cái gì đó |
| 2701 | sometimes | thỉnh thoảng, đôi khi |
| 2702 | somewhat | đến mức độ nào đó, hơi, một chút |
| 2703 | somewhere | nơi nào đó. đâu đó |
| 2704 | son | con trai |
| 2705 | song | bài hát |
| 2706 | soon | sớm, chẳng bao lâu nữa. as soon as ngay khi |
| 2707 | sore | đau, nhức |
| 2708 | sorry | xin lỗi, lấy làm tiếc, lấy làm buồn |
| 2709 | sort | thứ, hạng loại, lựa chọn, sắp xếp, phân loại |
| 2710 | soul | tâm hồn, tâm trí, linh hồn |
| 2711 | sound | âm thanh, nghe |
| 2712 | soup | xúp, canh, cháo |
| 2713 | source | nguồn |
| 2714 | south | phương Nam, hướng Nam, ở phía Nam, hướng về phía Nam |
| 2715 | southern | thuộc phương Nam |
| 2716 | space | khoảng trống, khoảng cách, không gian |
| 2717 | spare | thưa thãi, dự trữ, rộng rãi, đồ dự trữ, đồ dự phòng |
| 2718 | speak | nói |
| 2719 | speaker | người nói, người diễn thuyết |
| 2720 | special | đặc biệt, riêng biệt |
| 2721 | specialist | chuyên gia, chuyên viên |
| 2722 | specially | đặc biệt, riêng biệt |
| 2723 | specific | đặc trưng, riêng biệt |
| 2724 | specifically | đặc trưng, riêng biệt |
| 2725 | speech | sự nói, khả năng nói, lời nói, cách nói, bài nói |
| 2726 | speed | tốc độ, vận tốc |
| 2727 | spell | đánh vần, sự thu hút, sự quyến rũ say mê |
| 2728 | spelling | sự viết chính tả |
| 2729 | spend | tiêu, xài |
| 2730 | spice | gia vị |
| 2731 | spicy | có gia vị |
| 2732 | spider | con nhện |
| 2733 | spin | quay, quay tròn |
| 2734 | spirit | tinh thần, tâm hồn, linh hồn |
| 2735 | spiritual | (thuộc) tinh thần, linh hồn |
| 2736 | spite | sự giận, sự hận thù |
| 2737 | in spite of | mặc dù, bất chấp |
| 2738 | split | chẻ, tách, chia ra, sự chẻ, sự tách sự chia ra |
| 2739 | spoil | cướp, cướp đọat |
| 2740 | spoken | nói theo 1 cách nào đó |
| 2741 | spoon | cái thìa |
| 2742 | spot | dấu, đốm, vết |
| 2743 | spray | máy, ống, bình phụt, bơm, phun, bơm, phun, xịt |
| 2744 | spread | trải, căng ra, bày ra, truyền bá |
| 2745 | spring | mùa xuân |
| 2746 | square | vuông, vuông vắn, dạng hình vuông, hình vuông |
| 2747 | squeeze | ép, vắt, xiết, sự ép, sự vắt, sự xiết |
| 2748 | stable | ổn định, bình tĩnh, vững vàng, chuồng ngựa |
| 2749 | staff | gậy |
| 2750 | stage | tầng, bệ, sân khấu, giai đoạn |
| 2751 | stair | bậc thang |
| 2752 | stamp | tem, dán tem |
| 2753 | stand | đứng, sự đứng. |
| 2754 | stand up | đứng đậy |
| 2755 | standard | tiêu chuẩn, chuẩn, mãu, làm tiêu chuẩn, phù hợp với tiêu chuẩn |
| 2756 | star | ngôi sao, dán sao, trang trí hình sao, đánh dấu sao |
| 2757 | stare | nhìm chằm chằm, sự nhìn chằm chằm |
| 2758 | start | bắt đầu, khởi động, sự bắt đầu, s khởi đầu, khởi hành |
| 2759 | state | nhà nước, quốc gia, chính quyền, (thuộc) nhà nước, có liên quan đến nhà nước, phát biểu, tuyên bố |
| 2760 | statement | sự bày tỏ, sự phát biểu, sự tuyên bố, sự trình bày |
| 2761 | station | trạm, điểm, đồn |
| 2762 | statue | tượng |
| 2763 | status | tình trạng |
| 2764 | stay | ở lại, lưu lại, sự ở lại, sự lưu lại |
| 2765 | steadily | vững chắc, vững vàng, kiên định |
| 2766 | steady | vững chắc, vững vàng, kiến định |
| 2767 | steal | ăn cắp, ăn trộm |
| 2768 | steam | hơi nước |
| 2769 | steel | thép, ngành thép |
| 2770 | steep | dốc, dốc đứng |
| 2771 | steeply | dốc, cheo leo |
| 2772 | steer | lái (tàu, ô tô...) |
| 2773 | step | bước, bước, bước đi |
| 2774 | stick | đâm, thọc, chọc, cắm, dính, cái gậy, qua củi, cán |
| 2775 | stick out, stick for | đòi, đạt được cái gì |
| 2776 | sticky | dính, sánh, bầy nhầy, nhớp nháp |
| 2777 | stiff | cứng, cứng rắn, kiên quyết |
| 2778 | stiffly | cứng, cứng rắn, kiên quyết |
| 2779 | still | đứng yên, vẫn, vẫn còn |
| 2780 | sting | châm, chích, đốt, ngòi, vòi (ong, muỗi), nọc (rắn), sự châm, chích.. |
| 2781 | stir | khuấy, đảo |
| 2782 | stock | kho sự trữ, hàng dự trữ, vốn |
| 2783 | stomach | dạ dày |
| 2784 | stone | đá |
| 2785 | stop | dừng, ngưng, nghỉ, thôi, sự dừng, sự ngưng, sự đỗ lại |
| 2786 | store | cửa hàng, kho hàng, tích trữ, cho vào kho |
| 2787 | storm | cơn giông, b~o |
| 2788 | story | chuyện, câu chuyện |
| 2789 | stove | bếp lò, lò sưởi |
| 2790 | straight | thẳng, không cong |
| 2791 | strain | sự căng thẳng, sự căng |
| 2792 | strange | xa lạ, chưa quen |
| 2793 | strangely | lạ, xa lạ, chưa quen |
| 2794 | stranger | người lạ |
| 2795 | strategy | chiến lược |
| 2796 | stream | dòng suối |
| 2797 | strength | sức mạnh, sức khỏe |
| 2798 | stress | sự căng thẳng, căng thẳng, ép, làm căng |
| 2799 | stressed | bị căng thẳng, bị ép, bị căng |
| 2800 | stretch | căng ra, duỗi ra, kéo dài ra |
| 2801 | strict | nghiêm khắc, chặt chẽ,, khắt khe |
| 2802 | strictly | một cách nghiêm khắc |
| 2803 | strike | đánh, đập, bãi công, đình công, cuộc bãi công, cuộc đình công |
| 2804 | striking | nổi bật, gây ấn tượng |
| 2805 | string | dây, sợi dây |
| 2806 | strip | cởi, lột (quần áo), sự cởi quần áo |
| 2807 | stripe | sọc, vằn, viền |
| 2808 | striped | có sọc, có vằn |
| 2809 | stroke | cú đánh, cú đòn, cái vuốt ve, sự vuốt ve, vuốt ve |
| 2810 | strong | khỏe, mạnh, bền, vững, chắc chắ |
| 2811 | strongly | khỏe, chắc chắn |
| 2812 | structure | kết cấu, cấu trúc |
| 2813 | struggle | đấu tranh, cuộc đấu tranh, cuộc chiến đấu |
| 2814 | student | sinh viên |
| 2815 | studio | xưởng phim, trường quay, phòng thu |
| 2816 | study | sự học tập, sự nghiên cứu, học tập, nghiên cứu |
| 2817 | stuff | chất liệu, chất |
| 2818 | stupid | ngu ngốc, ngu đần, ngớ ngẩn |
| 2819 | style | phong cách, kiểu, mẫu, loại |
| 2820 | subject | chủ đề, đề tài, chủ ngữ |
| 2821 | substance | chất liệu, bản chất, nội dung |
| 2822 | substantial | thực tế, đáng kể, quan trọng |
| 2823 | substantially | về thực chất, về căn bản |
| 2824 | substitute | người, vật thay thế, thay thế |
| 2825 | succeed | nối tiếp, kế tiếp, kế nghiệp, kế vị |
| 2826 | success | sự thành công, sự thành đạt |
| 2827 | successful | thành công, thắng lợi, thành đạt |
| 2828 | successfully | thành công, thắng lợi, thành đạt |
| 2829 | such | như thế, như vậy, như là. such as đến nỗi, đến mức |
| 2830 | suck | bú, hút, hấp thụ, tiếp thu |
| 2831 | sudden | thình lình, đột ngột |
| 2832 | suddenly | thình lình, đột ngột |
| 2833 | suf | phố, đường phố |
| 2834 | suffer | chịu đựng, chịu thiệt hại, đấu khổ |
| 2835 | suffering | sự đau đớn, sự đau khổ |
| 2836 | sufficient | (+ for) đủ, thích đáng |
| 2837 | sufficiently | đủ, thích đáng |
| 2838 | sugar | đường |
| 2839 | suggest | đề nghị, đề xuất, gợi |
| 2840 | suggestion | sự đề nghị, sự đề xuất, sự khêu gợi |
| 2841 | suit | bộ com lê, trang phục, thích hợp, quen, hợp với |
| 2842 | suitable | hợp, phù hợp, thích hợp với |
| 2843 | suitcase | va li |
| 2844 | suited | hợp, phù hợp, thích hợp với |
| 2845 | sum | tổng, toàn bộ |
| 2846 | summary | bản tóm tắt |
| 2847 | summer | mùa hè |
| 2848 | sun | mặt trời |
| 2849 | Sunday | Chủ nhật |
| 2850 | superior | cao, chất lượng cao |
| 2851 | supermarket | siêu thị |
| 2852 | supply | sự cung cấp, nguồn cung cấp, cung cấp, đáp ứng, tiếp tế |
| 2853 | support | sự chống đỡ, sự ủng hộ, chống đỡ, ủng hộ |
| 2854 | supporter | vật chống đỡ, người cổ vũ, người ủng hộ |
| 2855 | suppose | cho rằng, tin rằng, nghĩ rằng |
| 2856 | sure | chắc chắn, xác thực. make sure chắc chắn, làm cho chắc chắn |
| 2857 | surely | chắc chắn |
| 2858 | surface | mặt, bề mặt |
| 2859 | surname | họ |
| 2860 | surprise | sự ngạc nhiên, sự bất ngờ, làm ngạc nhiên, gây bất ngờ |
| 2861 | surprised | ngạc nhiên (+ at) |
| 2862 | surprising | làm ngạc nhiên, làm bất ngờ |
| 2863 | surprisingly | làm ngạc nhiên, làm bất ngờ |
| 2864 | surround | vây quanh, bao quanh |
| 2865 | surrounding | sự vây quanh, sự bao quanh |
| 2866 | surroundings | vùng xung quanh, môi trường xung quanh |
| 2867 | survey | sự nhìn chung, sự khảo sát, quan sát, nhìn chung, khảo sát, nghiên cứu |
| 2868 | survive | sống lâu hơn, tiếp tục sống, sống sót |
| 2869 | suspect | nghi ngờ, hoài nghi, người khả nghi, người bị tình nghi |
| 2870 | suspicion | sự nghi ngờ, sự ngờ vực |
| 2871 | suspicious | có sự nghi ngờ, tỏ ra nghi ngờ, khả nghi |
| 2872 | swallow | nuốt, nuốt chửng |
| 2873 | swear | chửi rủa, nguyền rủa, thề, hứa |
| 2874 | swearing | lời thề, lời nguyền rủa, lời thề hứa |
| 2875 | sweat | mồ hôi, đổ mồ hôi |
| 2876 | sweater | người ra mồ hôi,, kẻ bóc lột lấo động |
| 2877 | sweep | quét |
| 2878 | sweet | ngọt, có vị ngọt, sự ngọt bùi, đồ ngọt |
| 2879 | swell | phồng, sưng lên |
| 2880 | swelling | sự sưng lên, sự phồng ra |
| 2881 | swim | bơi lội |
| 2882 | swimming | sự bơi lội |
| 2883 | swimming pool | bể nước |
| 2884 | swing | sự đu đưa, lúc lắc, đánh đu, đu đưa, lúc lắc |
| 2885 | switch | công tắc, roi, tắt, bật, đánh bằng gậy, roi. switch sth off ngắt điện. switch sth on bật điện |
| 2886 | swollen | sưng phồng, phình căng |
| 2887 | swollen swell | phồng lên, sưng lên |
| 2888 | symbol | biểu tượng, ký hiệu |
| 2889 | sympathetic | đồng cảm, đáng mến, dễ thương |
| 2890 | sympathy | sự đồng cảm, sự đồng ý |
| 2891 | system | hệ thống, chế độ |
| 2892 | table | cái bàn |
| 2893 | tablet | tấm, bản, thẻ phiến |
| 2894 | tackle | giải quyết, khắc phục, bàn thảo, đồ dùng, dụng cụ |
| 2895 | tail | đuôi, đoạn cuối |
| 2896 | take | sự cầm nắm, sự lấy. |
| 2897 | take sth off | cởi, bỏ cái gì, lấy đi cái gì |
| 2898 | take care of | sự giữ gìn. |
| 2899 | care for | trông nom, chăm sóc |
| 2900 | take part in | tham gia (vào) |
| 2901 | take sth over | chở, chuyển cái gì, tiếp quản, kế tục cái gì |
| 2902 | talk | nói chuyện, trò chuyện, cuộc trò chuyện, cuộc thảo luận |
| 2903 | tall | cao |
| 2904 | tank | thùng, két, bể |
| 2905 | tap | mở vòi, đóng vòi, vòi, khóa |
| 2906 | tape | băng, băng ghi âm, dải, dây |
| 2907 | target | bia, mục tiêu, đích |
| 2908 | task | nhiệm vụ, nghĩa vụ, bài tập, công tác, công việc |
| 2909 | tax | thuế, đánh thuế |
| 2910 | taxi | xe tắc xi |
| 2911 | tea | cây chè, trà, chè |
| 2912 | teach | dạy |
| 2913 | teacher | giáo viên |
| 2914 | teaching | sự dạy, công việc dạy học |
| 2915 | team | đội, nhóm |
| 2916 | tear | xé, làm rắch, chỗ rách, miếng xe, nước mắt |
| 2917 | technical | (thuộc) kỹ thuật, chuyên môn |
| 2918 | technique | kỹ sảo, kỹ thuật, phương pháp kỹ thuật |
| 2919 | technology | kỹ thuật học, công nghệ học |
| 2920 | telephone (phone) | máy điện thoại, gọi điện thoại |
| 2921 | television (TV) | vô tuyến truyền hình |
| 2922 | tell | nói, nói với |
| 2923 | temperature | nhiệt độ |
| 2924 | temporarily | tạm |
| 2925 | temporary | tạm thời, nhất thời |
| 2926 | tend | trông nom, chăm sóc, giữ gìn, hầu hạ |
| 2927 | tendency | xu hướng, chiều hướng, khuynh hướng |
| 2928 | tension | sự căng, độ căng, tình trạng căng |
| 2929 | tent | lều, rạp |
| 2930 | term | giới hạn, kỳ hạn, khóa, kỳ học |
| 2931 | terrible | khủng khiếp, ghê sợ |
| 2932 | terribly | tồi tệ, không chịu nổi |
| 2933 | test | bài kiểm tra, sự thử nghiệm, xét nghiệm, kiểm tra, xét nghiệm, thử nghiệm |
| 2934 | text | nguyên văn, bản văn, chủ đề, đề |
| 2935 | than | hơn |
| 2936 | thank | cám ơn |
| 2937 | thank you | cảm ơn bạn (ông bà, anh chị...) |
| 2938 | thanks | sự cảm ơn, lời cảm ơn |
| 2939 | that | người ấy, đó, vật ấy, đó, rằng, là |
| 2940 | the | cái, con, người, ấy này.... |
| 2941 | theatre | rạp hát, nhà hát |
| 2942 | their | của chúng, của chúng nó, của họ |
| 2943 | theirs | của chúng, của chúng nó, của họ |
| 2944 | them | chúng, chúng nó, họ |
| 2945 | theme | đề tài, chủ đề |
| 2946 | themselves | tự chúng, tự họ, tự |
| 2947 | then | khi đó, lúc đó, tiếp đó |
| 2948 | theory | lý thuyết, học thuyết |
| 2949 | there | ở nơi đó, tại nơi đó |
| 2950 | therefore | bởi vậy, cho nên, vì thế |
| 2951 | they | chúng, chúng nó, họ, những cái ấ |
| 2952 | thick | dày, đậm |
| 2953 | thickly | dày, dày đặc, thành lớp dày |
| 2954 | thickness | tính chất dày, độ dày, bề dày |
| 2955 | thief | kẻ trộm, kẻ cắp |
| 2956 | thin | mỏng, mảnh |
| 2957 | thing | cái, đồ, vật |
| 2958 | think | nghĩ, suy nghĩ |
| 2959 | thinking | sự suy nghĩ, ý nghĩ |
| 2960 | thirsty | khát, cảm thấy khát |
| 2961 | this | cái này, điều này, việc này |
| 2962 | thorough | cẩn thận, kỹ lưỡng |
| 2963 | thoroughly | kỹ lưỡng, thấu đáo, triệt để |
| 2964 | though | dù, dù cho, mặc dù, mặc dù, tuy nhiên, tuy vậy |
| 2965 | thought | sự suy nghĩ, khả năng suy nghĩ, ý nghĩ, tư tưởng, tư duy |
| 2966 | thread | chỉ, sợi chỉ, sợi dây |
| 2967 | threat | sự đe dọa, lời đe dọa |
| 2968 | threaten | dọa, đe dọa |
| 2969 | threatening | sự đe dọa, sự hăm dọa |
| 2970 | throat | cổ, cổ họng |
| 2971 | through | qua, xuyên qua |
| 2972 | throughout | khắp, suốt |
| 2973 | throw | ném, vứt, quăng. |
| 2974 | throw sth away | ném đi, vứt đi, liệng đi |
| 2975 | thumb | ngón tay cái |
| 2976 | Thursday (abbr Thur, Thurs) | thứ 5 |
| 2977 | thus | như vậy, như thế, do đó |
| 2978 | ticket | vé |
| 2979 | tidy | sạch sẽ, ngăn nắp, gọn gàng, làm cho sạch sẽ, gọn gàng, ngăn nắp |
| 2980 | tie | buộc, cột, trói, dây buộc, dây trói, dây giày. |
| 2981 | tie sth up | có quan hệ mật thiết, gắn chặt |
| 2982 | tight | kín, chặt, chật |
| 2983 | tightly | chặt chẽ, sít sao |
| 2984 | till, until | cho đến khi, tới lúc mà |
| 2985 | time | thời gian, thì giờ |
| 2986 | timetable | kế hoạch làm việc, thời gian biểu |
| 2987 | tin | thiếc |
| 2988 | tiny | rất nhỏ, nhỏ xíu |
| 2989 | tip | đầu, mút, đỉnh, chóp, bịt đầu, lắp đầu vào |
| 2990 | tire | làm mệt mỏi, trở nên mệt nhọc, lốp, vỏ xe |
| 2991 | tired | mệt, muốn ngủ, nhàm chán |
| 2992 | tiring | sự mệt mỏi, sự mệt nhọc |
| 2993 | title | đầu đề, tiêu đề, tước vị, tư cách |
| 2994 | to | theo hướng, tới |
| 2995 | today | vào ngày này, hôm nay, ngày nay |
| 2996 | toe | ngón chân (người) |
| 2997 | together | cùng nhau, cùng với |
| 2998 | toilet | nhà vệ sinh, sự trang điểm (rửa mặt, ăn mặc, chải tóc...) |
| 2999 | tomato | cà chua |
| 3000 | tomorrow | vào ngày mai, ngày mai |
| 3001 | ton | tấn |
| 3002 | tone | tiếng, giọng |
| 3003 | tongue | lưỡi |
| 3004 | tonight | vào đêm nay, vào tối nay, đêm nay, tối nay |
| 3005 | tonne | tấn |
| 3006 | too | cũng |
| 3007 | tool | dụng cụ, đồ dùng |
| 3008 | tooth | răng |
| 3009 | top | chóp, đỉnh, đứng đầu, trên hết |
| 3010 | topic | đề tài, chủ đề |
| 3011 | total | tổng cộng, toàn bộ, tổng số, toàn bộ số lượng |
| 3012 | totally | hoàn toàn |
| 3013 | touch | sờ, mó, tiếp xúc, sự sờ, sự mó, s tiếp xúc |
| 3014 | tough | chắc, bền, dai |
| 3015 | tour | cuộc đo du lịch, cuộc đi dạo, chuyến du lịch, đi du lịch |
| 3016 | tourist | khách du lịch |
| 3017 | towards | theo hướng, về hướng |
| 3018 | towel | khăn tắm, khăn lấu |
| 3019 | tower | tháp |
| 3020 | town | thị trấn, thị xã, thành phố nhỏ |
| 3021 | toy | đồ chơi, đồ trang trí, thể loại đồ chơi |
| 3022 | trace | phát hiện, tìm thấy, vạch, chỉ ra, phác họa, dấu, vết, một chút |
| 3023 | track | phần của đĩa, đường mòn, đường đua |
| 3024 | trade | thương mại, buôn bán, buôn bán, trao đổi |
| 3025 | trading | sự kinh doanh, việc mua bán |
| 3026 | tradition | truyền thống |
| 3027 | traditional | theo truyền thống, theo lối cổ |
| 3028 | traditionally | (thuộc) truyền thống, là truyền thống |
| 3029 | traffic | sự đi lại, sự giao thông, sự chuyển động |
| 3030 | train | xe lửa, tàu hỏa, dạy, rèn luyện, đào tạo |
| 3031 | training | sự dạy dỗ, sự huấn luyện, sự đào tạo |
| 3032 | transfer | dời, di chuyển, sự di chuyển, sự dời chỗ |
| 3033 | transform | thay đổi, biến đổi |
| 3034 | translate | dịch, biên dịch, phiên dịch |
| 3035 | translation | sự dịch |
| 3036 | transparent | trong suốt, dễ hiểu, sáng sủa |
| 3037 | transport | sự vận chuyển, sự vận tải, phương tiện đi lại |
| 3038 | trap | đồ đạc, hành lý, bẫy, cạm bãy, bẫy, giữ, chặn lại |
| 3039 | travel | đi lại, đi du lịch, di chuyển, sự đi, những chuyến đi |
| 3040 | traveller | người đi, lữ khách |
| 3041 | treat | đối xử, đối đãi, cư xử |
| 3042 | treatment | sự đối xử, sự cư xử |
| 3043 | tree | cây |
| 3044 | trend | phương hướng, xu hướng, chiều hướng |
| 3045 | trial | sự thử nghiệm, cuộc thử nghiệm |
| 3046 | triangle | hình tam giác |
| 3047 | trick | mưu mẹo, thủ đoạn, trò lừa gạt, lừa gạt |
| 3048 | trip | cuộc dạo chơi, cuộc du ngoạn, đi dạo, du ngoạn |
| 3049 | tropical | nhiệt đới |
| 3050 | trouble | điều lo lắng, điều muộn phiền |
| 3051 | trousers | quần tây |
| 3052 | truck | sự trao đổi, sự đổi chác |
| 3053 | TRUE | đúng, thật |
| 3054 | truly | đúng sự thật, đích thực, thực sự |
| 3055 | trust | niềm tin, sự phó thác, tin, tin cậy, phó thác |
| 3056 | truth | sự thật |
| 3057 | try | thử, cố gắng |
| 3058 | tube | ống, tuýp |
| 3059 | Tuesday (abbr Tue, Tues) | thứ 3 |
| 3060 | tune | điệu, giai điệu, lên dây, so dây (đàn) |
| 3061 | tunnel | đường hầm, hang |
| 3062 | turn | quay, xoay, vặn, sự quay, vòng quay |
| 3063 | TV television | vô tuyến truyền hình |
| 3064 | twice | hai lần |
| 3065 | twin | sinh đôi, tạo thành cặp, cặp song sinh |
| 3066 | twist | xoắn, cuộn, quắn, sự xoắn, vòng xoắn |
| 3067 | twisted | được xoắn, được cuộn |
| 3068 | type | loại, kiểu, mẫu, phân loại, xếp loại |
| 3069 | typical | tiêu biểu, điển hình, đặc trưng |
| 3070 | typically | điển hình, tiêu biểu |
| 3071 | tyre | lốp, vỏ xe |
| 3072 | ugly | xấu xí, xấu xa |
| 3073 | ultimate | cuối cùng, sau cùng |
| 3074 | ultimately | cuối cùng, sau cùng |
| 3075 | umbrella | ô, dù |
| 3076 | unable | không có năng lực, không có tài, không thể, không có khẳ năng |
| 3077 | unacceptable | không chấp nhận được |
| 3078 | unacceptable, acceptable | không thể chấp nhận |
| 3079 | uncertain | thiếu chính xác, không chắc chắn |
| 3080 | uncertain, certain | không chắc chắn, khôn biết rõ ràng |
| 3081 | uncle | chú, bác |
| 3082 | uncomfortable | bất tiện, khó chịu, không thoải mái, không tiện lợi |
| 3083 | unconscious | bất tỉnh, không có ý thức, không biết rõ |
| 3084 | unconscious, conscious | bất tỉnh, ngất đi |
| 3085 | uncontrolled | không bị điều khiển, không bị kiểm tra, không bị hạn chế |
| 3086 | uncontrolled, control | không bị kiềm chế, không bị kiểm tra |
| 3087 | under | dưới, ở dưới, ở phía dưới, về phía dưới |
| 3088 | underground | dưới mặt đất, ngầm dưới đất, ngầm |
| 3089 | underneath | dưới, bên dưới |
| 3090 | understand | hiểu, nhận thức |
| 3091 | understanding | trí tuệ, sự hiểu biết |
| 3092 | underwater | ở dưới mặt nước, dưới mặt nước |
| 3093 | underwear | quần lót |
| 3094 | undo | tháo, gỡ, xóa bỏ, hủy bỏ |
| 3095 | unemployed | thất nghiệp, không dùng, không sử dụng được |
| 3096 | unemployment | sự thất nghiệp, nạn thất nghiệp |
| 3097 | unexpected | bất ngờ, gây ngạc nhiên |
| 3098 | unexpectedly | bất ngờ, gây ngạc nhiên |
| 3099 | unfair | gian lận, không công bằng, bất lợi |
| 3100 | Unfair, unfairly | không đúng, không công bằng, gian lận |
| 3101 | unfairly | gian lận, không công bằng, bất lợi |
| 3102 | unfortunate | không may, rủi ro, bất hạnh |
| 3103 | unfortunately | một cách đáng tiếc, một cách không may |
| 3104 | unfriendly | không thân thiện, không có thiện cảm |
| 3105 | unhappiness | nỗi buồn, sự bất hạnh |
| 3106 | unhappy | buồn rầu, khốn khổ |
| 3107 | uniform | đồng phục, đều, giống nhấu, đồng dạng |
| 3108 | unimportant | không quan trọng, không trọng đại |
| 3109 | union | liên hiệp, sự đoàn kết, sự hiệp nhất |
| 3110 | unique | độc nhất vô nhị |
| 3111 | unit | đơn vị |
| 3112 | unite | liên kết, hợp nhất, hợp lại, kết thâ |
| 3113 | united | liên minh, đoàn kết, chung, thống nhất |
| 3114 | universe | vũ trụ |
| 3115 | unkind | độc ác, tàn nhẫn |
| 3116 | unknown | không biết |
| 3117 | unless | trừ phi, trừ khi, nếu không |
| 3118 | unlike | khác, không giống |
| 3119 | unlikely | không thể xảy ra, không chắc xảy ra |
| 3120 | unload | cất gánh nặng, dỡ hàng |
| 3121 | unlucky | không gặp may, bất hạnh |
| 3122 | unnecessary | không cần thiết, không mong muốn |
| 3123 | unpleasant | không dễ chịu, khó chịu, khó ưa |
| 3124 | unreasonable | vô lý |
| 3125 | unsteady | không chắc, không ổn định |
| 3126 | unsuccessful | không thành công, thất bại |
| 3127 | untidy | không gọn gàng, không ngăn nắp lộn xộn |
| 3128 | until, till | trước khi, cho đến khi |
| 3129 | Unusual | hiếm, khác thường |
| 3130 | unusually | cực kỳ, khác thường |
| 3131 | Unwilling | không muốn, không có ý định |
| 3132 | unwillingly | không sẵn lòng, miễn cưỡng |
| 3133 | up | ở trên, lên trên, lên |
| 3134 | upon | trên, ở trên |
| 3135 | upper | cao hơn |
| 3136 | upset | làm đổ, đánh đổ |
| 3137 | upsetting | tính đánh đổ, làm đổ |
| 3138 | upside down | lộn ngược |
| 3139 | upstairs | ở tên gác, cư ngụ ở tầng gác, tần trên, gác |
| 3140 | upward | lên, hướng lên, đi lên |
| 3141 | upwards | lên, hướng lên, đi lên, về phía trên |
| 3142 | urban | (thuộc) thành phố, khu vực |
| 3143 | urge | thúc, giục, giục giã, sự thúc đẩy, sự thôi thúc |
| 3144 | urgent | gấp, khẩn cấp |
| 3145 | us | chúng tôi, chúng ta, tôi và anh |
| 3146 | use | sử dụng, dùng, sự dùng, sự sử dụng |
| 3147 | used | đã dùng, đã sử dụng. |
| 3148 | used to sth/to doing sth | sử dụng cái gì, s dụng để làm cái gì |
| 3149 | used to | đã quen dùng |
| 3150 | useful | hữu ích, giúp ích |
| 3151 | useless | vô ích, vô dụng |
| 3152 | user | người dùng, người sử dụng |
| 3153 | usual | thông thường, thường dùng |
| 3154 | usually | thường thường |
| 3155 | vacation | kỳ nghỉ hè, kỳ nghỉ lễ, ngày nghỉ, ngày lễ |
| 3156 | valid | chắc chắn, hiệu quả, hợp lý |
| 3157 | valley | thung lũng |
| 3158 | valuable | có giá trị lớn, đáng giá |
| 3159 | value | giá trị, ước tính, định giá |
| 3160 | van | tiền đội, quân tiên phong, xe tải |
| 3161 | variation | sự biến đổi, sự thay đổi mức độ, sự khác nhau |
| 3162 | varied | thuộc nhiều loại khác nhau, những vẻ đa dạng |
| 3163 | variety | sự đa dạng, trạng thái khác nhau |
| 3164 | various | khác nhau, thuộc về nhiều loại |
| 3165 | vary | thay đổi, làm cho khác nhau, biến đổi |
| 3166 | vast | rộng lớn, mênh mông |
| 3167 | vegetable | rau, thực vật |
| 3168 | vehicle | xe cộ |
| 3169 | venture | dự án kinh doanh, công việc kinh doanh, liều, mạo hiểm, cả gan |
| 3170 | version | A different, modified, or updated form of an object, document, or software. |
| 3171 | vertical | thẳng đứng, đứng |
| 3172 | very | rất, lắm |
| 3173 | via | qua, theo đường |
| 3174 | victim | nạn nhân |
| 3175 | victory | chiến thắng |
| 3176 | video | video |
| 3177 | view | sự nhìn, tầm nhìn, nhìn thấy, xem quan sát |
| 3178 | village | làng, xã |
| 3179 | violence | sự ác liệt, sự dữ dội, bạo lực |
| 3180 | violent | mãnh liệt, mạnh mẽ, hung dữ |
| 3181 | violently | mãnh liệt, dữ dội |
| 3182 | virtually | thực sự, hầu như, gần như |
| 3183 | virus | vi rút |
| 3184 | visible | hữu hình, thấy được |
| 3185 | vision | sự nhìn, thị lực |
| 3186 | visit | đi thăm hỏi, đến chơi, tham quan, sự đi thăm, sự thăm viếng |
| 3187 | visitor | khách, du khách |
| 3188 | vital | (thuộc) sự sống, cần cho sự sống |
| 3189 | vocabulary | từ vựng |
| 3190 | voice | tiếng, giọng nói |
| 3191 | volume | thế tích, quyển, tập |
| 3192 | vote | sự bỏ phiếu, sự bầu cử, bỏ phiếu, bầu cử |
| 3193 | wage | tiền lương, tiền công |
| 3194 | waist | eo, chỗ thắt lưng |
| 3195 | wait | chờ đợi |
| 3196 | waiter, waitress | người hầu bàn, người đợi, người trông chờ |
| 3197 | wake up | thức dậy, tỉnh thức |
| 3198 | walk | đi, đi bộ, sự đi bộ, sự đi dạo |
| 3199 | walking | sự đi, sự đi bộ |
| 3200 | wall | tường, vách |
| 3201 | wallet | cái ví |
| 3202 | wander | đi lang thang, sự đi lang thang |
| 3203 | want | muốn |
| 3204 | war | chiến tranh |
| 3205 | warm | ấm, ấm áp, làm cho nóng, hâm nóng |
| 3206 | warmth | trạng thái ấm, sự ấm áp, hơi ấm |
| 3207 | warn | báo cho biết, cảnh báo |
| 3208 | warning | sự báo trước, lời cảnh báo |
| 3209 | wash | rửa, giặt |
| 3210 | washing | sự tắm rửa, sự giặt |
| 3211 | waste | lãng phí, uổng phí, vùng hoang vu sa mạc, bỏ hoang |
| 3212 | watch | nhìn, theo dõi, quan sát, sự canh gác, sự canh phòng |
| 3213 | water | nước |
| 3214 | wave | sóng, gợn nước, gợn sóng, uốn thành sóng |
| 3215 | way | đường, đường đi |
| 3216 | we | chúng tôi, chúng ta |
| 3217 | weak | yếu, yếu ớt |
| 3218 | weakness | tình trạng yếu đuối, yếu ớt |
| 3219 | wealth | sự giàu có, sự giàu sang |
| 3220 | weapon | vũ khí |
| 3221 | wear | mặc, mang, đeo |
| 3222 | weather | thời tiết |
| 3223 | web | mạng, lưới |
| 3224 | website | không gian liên tới với Internet |
| 3225 | wedding | lễ cưới, hôn lễ |
| 3226 | Wednesday | thứ 4 |
| 3227 | week | tuần, tuần lễ |
| 3228 | weekend | cuối tuần |
| 3229 | weekly | mỗi tuần một lần, hàng tuần |
| 3230 | weigh | cân, cân nặng |
| 3231 | weight | trọng lượng |
| 3232 | welcome | chào mừng, hoan nghênh |
| 3233 | well | tốt, giỏi, ôi, may quá! |
| 3234 | well known | nổi tiếng, được nhiều người biết đến |
| 3235 | west | phía Tây, theo phía tây, về hướng tây |
| 3236 | western | về phía tây, của phía tây |
| 3237 | wet | ướt, ẩm ướt |
| 3238 | what | gì, thế nào |
| 3239 | whatever | bất cứ thứ gì, bất kể thứ gì |
| 3240 | wheel | bánh xe |
| 3241 | when | khi, lúc, vào lúc nào |
| 3242 | whenever | bất cứ lúc nào, lúc nào |
| 3243 | where | đâu, ở đâu, nơi mà |
| 3244 | whereas | nhưng trái lại, trong khi mà |
| 3245 | wherever | ở bất cứ nơi nào, ở bất cứ nơi đâ |
| 3246 | whether | có..không, có... chăng, không biết có.. không |
| 3247 | which | nào, bất cứ.. nào, ấy, đó |
| 3248 | while | trong lúc, trong khi, lúc, chốc, lát |
| 3249 | whilst | trong lúc, trong khi |
| 3250 | whisper | nói thì thầm, xì xào, tiếng nói thì thầm, tiếng xì xào |
| 3251 | whistle | sự huýt sáo, sự thổi còi, huýt sáo, thổi còi |
| 3252 | white | trắng, màu trắng |
| 3253 | who | ai, người nào, kẻ nào, người như thế nào |
| 3254 | whoever | ai, người nào, bất cứ ai, bất cứ người nào, dù ai |
| 3255 | whole | bình an vô sự, không suy suyển, không hư hỏng, toàn bộ, tất cả, toàn thể |
| 3256 | whom | ai, người nào, người mà |
| 3257 | whose | của ai |
| 3258 | why | tại sao, vì sao |
| 3259 | wide | rộng, rộng lớn |
| 3260 | widely | nhiều, xa, rộng rãi |
| 3261 | width | tính chất rộng, bề rộng |
| 3262 | wife | vợ |
| 3263 | wild | dại, hoang |
| 3264 | wildly | dại, hoang |
| 3265 | will | sẽ, ý chí, ý định |
| 3266 | willing | bằng lòng, vui lòng, muốn |
| 3267 | willingly | sẵn lòng, tự nguyện |
| 3268 | willingness | sự bằng lòng, sự vui lòng |
| 3269 | win | chiếm, đọat, thu được |
| 3270 | wind | quấn lại, cuộn lại. |
| 3271 | wind sth up | lên dây, quấn, giải quyết |
| 3272 | window | cửa sổ |
| 3273 | wine | rượu, đồ uống |
| 3274 | wing | cánh, sự bay, sự cất cánh |
| 3275 | winner | người thắng cuộc |
| 3276 | winning | đang dành thắng lợi, thắng cuộc |
| 3277 | winter | mùa đông |
| 3278 | wire | dây (kim loại) |
| 3279 | wise | khôn ngoan, sáng suốt, thông thái |
| 3280 | wish | ước, mong muốn, sự mong ước, lòng mong muốn |
| 3281 | with | với, cùng |
| 3282 | withdraw | rút, rút khỏi, rút lui |
| 3283 | within | trong vong thời gian, trong khoảng thời gian |
| 3284 | without | không, không có |
| 3285 | witness | sự làm chứng, bằng chứng, chứng kiến, làm chứng |
| 3286 | woman | đàn bà, phụ nữ |
| 3287 | wonder | ngạc nhiên, lấy làm lạ, kinh ngạc |
| 3288 | wonderful | phi thường, khác thường, kỳ diệu, tuyệt vời |
| 3289 | wood | gỗ |
| 3290 | wooden | làm bằng gỗ |
| 3291 | wool | len |
| 3292 | work | làm việc, sự làm việc |
| 3293 | worker | người lao động |
| 3294 | working | sự làm, sự làm việc |
| 3295 | world | thế giới |
| 3296 | worried | bồn chồn, lo nghĩ, tỏ ra lo lắng. |
| 3297 | worry | lo lắng, suy nghĩ, sự lo lắng, suy nghĩ |
| 3298 | worrying | gây lo lắng, gây lo nghĩ |
| 3299 | worse, worst | xấu |
| 3300 | worship | sự tôn thờ, sự tôn sùng, thờ, thờ phụng, tôn thờ |
| 3301 | worth | đáng giá, có giá trị |
| 3302 | would | sẽ |
| 3303 | wound | vết thương, thương tích, làm bị thường, gây thương tích |
| 3304 | wounded | bị thương |
| 3305 | wrap | gói, bọc, quấn |
| 3306 | wrapping | vật bao bọc, vật quấn quanh |
| 3307 | wrist | cổ tay |
| 3308 | write | viết |
| 3309 | writer | người viết |
| 3310 | writing | sự viết |
| 3311 | written | viết ra, được thảo ra |
| 3312 | wrong | sai. go wrong mắc lỗi, sai lầm |
| 3313 | wrongly | một cách bất công, không đúng |
| 3314 | yard | sân, thước Anh (bằng 0, 914 mét) |
| 3315 | yawn | há miệng, cử chỉ ngáp |
| 3316 | yeah | vâng, ư |
| 3317 | year | năm |
| 3318 | yellow | vàng, màu vàng |
| 3319 | yes | vâng, phải, có chứ |
| 3320 | yesterday | hôm qua |
| 3321 | yet | còn, hãy cỏn, còn nữa, như mà, xong, tuy thế, tuy nhiên |
| 3322 | you | bạn |
| 3323 | young | trẻ, trẻ tuổi, thanh niên |
| 3324 | your | của bạn |
| 3325 | yours | cái của các bạn |
| 3326 | Yours sincerely | bạn chân thành của anh, chị.. (viế ở cuối thư) |
| 3327 | Yours Truly | lời kết thúc thư (bạn chân thành của...) |
| 3328 | yourself | tự anh, tự chị, chính anh, chính mày, tự mày, tự mình |
| 3329 | youth | tuổi trẻ, tuổi xuân, tuổi thanh niên, tuổi niên thiếu |
| 3330 | zero number | số không |
| 3331 | zone | khu vực, miền, vùng |
| 3332 | Farther along | xa hơn dọc theo… |
| 3333 | In back | phía sau |
| 3334 | In front | phía trước |
| 3335 | On top of | trên đỉnh của |
| 3336 | To the left | về phía bên trái |
| 3337 | To the right | về phía bên phải |
| 3338 | Besides | ngoài ra |
| 3339 | First, second, third,… | thứ nhất, thứ hai, thứ ba,… |
| 3340 | To begin with | bắt đầu với |
| 3341 | Furthermore | xa hơn nữa |
| 3342 | Accordingly | theo như |
| 3343 | And so | và vì thế |
| 3344 | As a result | kết quả là |
| 3345 | For the reason | vì lý do này nên |
| 3346 | Hence, so, therefore, thus | vì vậy |
| 3347 | Because/ Because of | bởi vì |
| 3348 | The reason for this is | lý do cho điều này là |
| 3349 | The reason why | lý do tại sao |
| 3350 | Due to/ Owing to | do |
| 3351 | The cause of… is | nguyên nhân của vấn đề là |
| 3352 | To be caused by | được gây ra bởi |
| 3353 | To be originated from | có nguồn gốc từ |
| 3354 | To arise from | phát sinh từ |
| 3355 | Leads to/ leading to | dẫn đến |
| 3356 | Consequently / as a result/ As a consequence | hậu quả là |
| 3357 | But/ yet | nhưng |
| 3358 | However/ nevertheless | tuy nhiên |
| 3359 | In contrast, on the contrary | đối lập với |
| 3360 | On the other hand | mặt khác |
| 3361 | Although/ even though | mặc dù |
| 3362 | Be different from/ to differ from | khác với |
| 3363 | In opposition | đối lập |
| 3364 | While/ whereas | trong khi |
| 3365 | The reverse | ngược lại |
| 3366 | By the same token | bằng những bằng chứng tương tự như thế |
| 3367 | In like manner | theo cách tương tự |
| 3368 | In the same way | theo cách giống như thế |
| 3369 | In similar fashion | theo cách tương tự thế |
| 3370 | Likewise, similarly | tương tự thế |
| 3371 | As an example | như một ví dụ |
| 3372 | For example | ví dụ |
| 3373 | For instance | kể đến một số ví dụ |
| 3374 | To illustrate | để minh họa |
| 3375 | Afterward | về sau |
| 3376 | At the same time | cùng thời điểm |
| 3377 | Earlier | sớm hơn |
| 3378 | In the future | trong tương lai |
| 3379 | In the meantime | trong khi chờ đợi |
| 3380 | In the past | trong quá khứ |
| 3381 | Simultaneously | đồng thời |
| 3382 | Subsequently/ then | sau đó |
| 3383 | Until now | cho đến bây giờ |
| 3384 | After all | sau tất cả |
| 3385 | At last, finally | cuối cùng |
| 3386 | In brief | nói chung |
| 3387 | In closing | tóm lại là |
| 3388 | In conclusion | kết luận lại thì |
| 3389 | On the whole | nói chung |
| 3390 | To conclude | để kết luận |
| 3391 | To summarize | tóm lại |
| 3392 | In other words | nói cách khác |
| 3393 | In short | nói ngắn gọn lại thì |
| 3394 | In simpler terms | nói theo một cách đơn giản hơn |
| 3395 | To put it differently | nói khác đi thì |
| 3396 | To repeat | để nhắc lại |
| 3397 | In fact | thực tế là |
| 3398 | Puzzle (n) | Vấn đề nan giải |
| 3399 | Barbecue party | Tiệc nướng ngoài trời |
| 3400 | Charisma (n) | Khả năng thu hút sự chú ý và ngưỡng mộ của người khác (tố chất lãnh đạo) |
| 3401 | To be a great leader, a person has to have some charisma | Để trở thành một nhà lãnh đạo vĩ đại, một người phải có sức lôi cuốn |
| 3402 | He was the charismatic leader his people had hoped for. | Ông ấy là nhà lãnh đạo lôi cuốn mà người dân của ông đã hy vọng. |
| 3403 | Procrastination (n), procrastinate (v) | Sự trì hoãn, chần chừ |
| 3404 | Suffice (v) – to be enough | Đủ để đáp ứng |
| 3405 | I am trying to live to suffice those expectations | Tôi đang cố gắng sống để đáp ứng những kỳ vọng đó |
| 3406 | Exotic (adj) | Kỳ lạ, đẹp kỳ lạ (thường nói về những thứ đến từ đất nước xa xôi) |
| 3407 | It looked very exotic to me when… | Nó trông rất lạ lẫm với tôi khi… |
| 3408 | Offensive (n/a) | Cuộc tấn công / Mang tính xúc phạm |
| 3409 | Defend (v) | Bảo vệ, bênh vực, ủng hộ |
| 3410 | I defend myself against SO | Tôi tự bảo vệ mình chống lại ai đó |
| 3411 | Dread (v) | Nghĩ đến mà sợ |
| 3412 | I dread going to work every morning | Tôi sợ phải đi làm mỗi sáng |
| 3413 | Chaotic (a) | Hỗn độn, lộn xộn |
| 3414 | Unsportsmanlike (a) | Không quang minh chính đại, không có tinh thần thể thao |
| 3415 | Nuts (a) | Dở hơi, điên rồ |
| 3416 | Dilemma (n) | Tình thế khó xử, thế tiến thoái lưỡng nan |
| 3417 | To be put into a dilemma | Bị rơi vào thế tiến thoái lưỡng nan |
| 3418 | Ridiculous requirements | Những yêu cầu buồn cười, lố bịch |
| 3419 | Restless (a) | Bồn chồn, không yên |
| 3420 | Bizarre (a) | Kỳ lạ, quái dị |
| 3421 | Cryptic (a) | Khó hiểu, bí ẩn |
| 3422 | Dispute (v,n) | Bàn cãi, tranh luận (bất đồng với điều ai đó nói) |
| 3423 | Presupposes | Giả định, phỏng đoán (chấp nhận điều gì là đúng trước khi được chứng minh) |
| 3424 | Eliminate | Loại trừ |
| 3425 | Search for the needle in the hay stack | Mò kim đáy biển |
| 3426 | A talent scout | Một người đi chiêu mộ kẻ có tài |
| 3427 | Pessimistic (adj) | Bi quan |
| 3428 | Comply with (v) | Tuân theo, đồng ý làm theo |
| 3429 | Appeal (n/v) | Yêu cầu giúp đỡ, kêu gọi |
| 3430 | Desperately (adv) | Liều lĩnh, tuyệt vọng |
| 3431 | Instinctively (adv) | Theo bản năng |
| 3432 | Cc (courtesy copy) | Bản sao gửi kèm (trong email) |
| 3433 | Mystify (v) | Làm bối rối, làm khó hiểu |
| 3434 | Not using jargon and abbreviations that might mystify the reader. | Không sử dụng thuật ngữ và từ viết tắt có thể làm người đọc khó hiểu. |
| 3435 | Descriptive (a) | Có tính mô tả |
| 3436 | Using a clear and descriptive subject line | Sử dụng dòng tiêu đề rõ ràng và có tính mô tả |
| 3437 | Sloppy (a) | Cẩu thả, luộm thuộm |
| 3438 | Correcting sloppy grammar and spelling | Sửa lỗi ngữ pháp và chính tả cẩu thả |
| 3439 | Speculate (v) | Tự biện, suy xét, phỏng đoán |
| 3440 | Manipulate (v) | Vận động, lôi kéo, thao túng |
| 3441 | Allergen (n) /ˈæl.ə.dʒən/ | Chất gây dị ứng |
| 3442 | Concrete /ˈkɑn·krit/ (n/a) | Bê tông (n) / Cụ thể, bằng bê tông (a) |
| 3443 | A concrete wall | Một bức tường bê tông |
| 3444 | Sibling (n) | Anh chị em ruột |
| 3445 | Persistent (a) | Dai dẳng, liên tục |
| 3446 | Persistent rain | Mưa dai dẳng |
| 3447 | Renovate (v) | Nâng cấp, cải tiến, đổi mới |
| 3448 | Distract (v) (distract someone from) | Làm sao lãng |
| 3449 | Torture (n/v) /ˈtɔr·tʃər/ | Sự tra tấn, tra tấn |
| 3450 | This is like little torture | Điều này giống như một sự tra tấn nhỏ |
| 3451 | Pride (n/v) | Niềm tự hào, niềm kiêu hãnh, tự hào về… |
| 3452 | Meadow /ˈmed·oʊ/ (n) | Đồng cỏ, bãi cỏ |
| 3453 | Now spring is in full swing here, everything is very green, the meadows are full of wild flowers, and the trees are blossoming as well | Bây giờ mùa xuân đang độ rực rỡ nhất ở đây, mọi thứ đều rất xanh tươi, những đồng cỏ đầy hoa dại, và cây cối cũng đang nở hoa |
| 3454 | Decipher /dɪˈsɑɪ·fər/ (n/v) | Giải mã, đọc mật mã |
| 3455 | Revelation /ˌrev·əˈleɪ·ʃən/ (n) | Sự phát hiện, sự phát giác (gây ngạc nhiên) |
| 3456 | Downfall (n) | Sự sa sút, suy sụp |
| 3457 | The downfall of the company | Sự sụp đổ của công ty |
| 3458 | Apprentice /əˈpren·tɪs/ (n) | Người học việc |
| 3459 | Regret /rɪˈgret/ (n/v) | Hối hận, ân hận |
| 3460 | I never really regretted to come back. | Tôi chưa bao giờ thực sự hối hận khi quay trở lại. |
| 3461 | To be reluctant /rɪˈlʌk·tənt/ (adj) | Miễn cưỡng, bất đắc dĩ |
| 3462 | Put-downs (n) | Sự làm bẽ mặt ai, lời chê bai |
| 3463 | Put-downs occur when members of the group ridicule the ideas that are presented by other members | Những lời chê bai xảy ra khi các thành viên trong nhóm nhạo báng các ý tưởng được trình bày bởi các thành viên khác |
| 3464 | Ridicule (n/v) | Nhạo báng, chế nhạo |
| 3465 | You should not ridicule or attack someone personally because you don't like their idea. | Bạn không nên chế nhạo hoặc tấn công cá nhân ai đó vì bạn không thích ý tưởng của họ. |
| 3466 | Courteous / courteously | Lịch sự, nhã nhặn |
| 3467 | Always talk in a manner that is courteous to others | Luôn nói chuyện theo cách lịch sự với người khác |
| 3468 | Tactful / tactfully | Khéo léo, lịch thiệp |
| 3469 | If you disagree with a statement that has been made, do it in a manner that is tactful | Nếu bạn không đồng ý với một tuyên bố đã được đưa ra, hãy làm điều đó một cách khéo léo |
| 3470 | Interjection / interject (in/into) (v) | Thán từ / Xen vào, ngắt lời |
| 3471 | If you need to interrupt someone who is speaking, it is always important to interject their conversation in a nice way | Nếu bạn cần ngắt lời ai đó đang nói, điều quan trọng là luôn xen vào cuộc trò chuyện của họ một cách tử tế |
| 3472 | Eloquently (adv) | Một cách hùng hồn |
| 3473 | During group discussions, it isn't just enough to speak eloquently. It is also important to make sure you speak in a proper tone | Trong các cuộc thảo luận nhóm, chỉ nói hùng hồn thôi là chưa đủ. Điều quan trọng nữa là đảm bảo bạn nói với giọng điệu thích hợp |
| 3474 | Audibly (adv) | Rõ ràng, rành rành (nghe được) |
| 3475 | It is also important to speak audibly. | Điều quan trọng là phải nói đủ nghe. |
| 3476 | Tedious (adj) | Chán ngắt, buồn tẻ |
| 3477 | A tedious speech/lecture | Một bài phát biểu/bài giảng buồn tẻ |
| 3478 | Ancient (adj) | Xưa, cổ, cổ đại |
| 3479 | Ancient history, history of ancient Egypt | Lịch sử cổ đại, lịch sử Ai Cập cổ đại |
| 3480 | Pyramids (n) | Kim tự tháp, hình chóp |
| 3481 | Indeed | Quả thực, thực sự (really), thật vậy, quả thật |
| 3482 | I was indeed/really very glad to hear the news. | Tôi thực sự rất vui khi nghe tin này. |
| 3483 | Pertain (to) | Gắn liền với, đi đôi với |
| 3484 | Joy pertain to youth | Niềm vui gắn liền với tuổi trẻ |
| 3485 | Goose bumps | Nổi da gà |
| 3486 | Goose bumps occur when the hairs on your arms or body stand up automatically because you are cold or scared or because your skin gets irritated | Nổi da gà xảy ra khi lông trên cánh tay hoặc cơ thể bạn tự động dựng đứng vì bạn lạnh, sợ hãi hoặc do da bị kích ứng |
| 3487 | I cannot find any new songs that create "goose bumps" on me | Tôi không thể tìm thấy bài hát mới nào khiến tôi "nổi da gà" |
| 3488 | I can not bear that fellow | Tôi không thể chịu đựng được gã đó |
| 3489 | Awkward (adj) | Rắc rối, khó xử, ngượng ngùng |
| 3490 | To be in an awkward situation | Ở trong một tình huống khó xử |
| 3491 | Distribute (v) | Phân phát |
| 3492 | Slip (n) | Sự sơ suất, trượt chân |
| 3493 | Rationale (n) | Lý do căn bản, cơ sở hợp lý, nguyên nhân dẫn đến một vấn đề |
| 3494 | Justify (v) | Bào chữa, thanh minh |
| 3495 | Crisis [‘kraisis] | Cơn khủng hoảng |
| 3496 | Economic crisis | Khủng hoảng kinh tế |
| 3497 | Conserve (v) | Giữ gìn, bảo tồn |
| 3498 | Long (v) | Nóng lòng, mong mỏi |
| 3499 | I long to see him | Tôi mong mỏi được gặp anh ấy |
| 3500 | Comprehend (v) | Nhận thức thấu đáo, hiểu rõ |
| 3501 | Envious (of somebody / something) | Thèm muốn, ghen tị |
| 3502 | I am envious to you | Tôi ghen tị với bạn |
| 3503 | Vanish (v) | Biến mất, lẩn mất |
| 3504 | To vanish in the crowd | Lẩn mất vào đám đông |
| 3505 | Pursue (v) | Theo đuổi |
| 3506 | To pursue a plan | Theo đuổi một kế hoạch |
| 3507 | Adventure (n/v) | Sự mạo hiểm, mạo hiểm, liều lĩnh, táo bạo |
| 3508 | Contemplates (v) | Nghiền ngẫm, trầm ngâm |
| 3509 | Cozy (adj) | Ấm cúng, thoải mái dễ chịu |
| 3510 | A cozy place | Một nơi ấm cúng |
| 3511 | Crayon (n/v) | Bút chì màu, vẽ bằng bút chì màu |
| 3512 | Halve (v) | Chia đôi, giảm một nửa |
| 3513 | A sorrow shared is a sorrow halved | Nỗi buồn chia sẻ là nỗi buồn vơi đi một nửa |
| 3514 | a joy shared is a joy doubled. | niềm vui chia sẻ là niềm vui nhân đôi |
| 3515 | Tender (adj) | Âu yếm, dịu dàng, tế nhị, dễ vỡ |
| 3516 | Belated (adj) | Đến muộn, đến chậm |
| 3517 | I gave her some belated Christmas present. | Tôi đã tặng cô ấy món quà Giáng sinh muộn. |
| 3518 | Bear / bore / borne | Chịu, chịu đựng |
| 3519 | I can’t bear that fellow | Tôi không thể chịu đựng gã đó |
| 3520 | Responsible / Irresponsible | Có trách nhiệm / Vô trách nhiệm |
| 3521 | Considerate / Inconsiderate (adj) | Chu đáo / Thiếu thận trọng, thiếu chu đáo |
| 3522 | Burden (n) | Gánh nặng |
| 3523 | To be a burden to someone | Là gánh nặng cho ai |
| 3524 | I hope it is not such a big burden to you. | Tôi hy vọng nó không phải là gánh nặng quá lớn đối với bạn. |
| 3525 | Ponderous (adj) | Nặng, có trọng lượng (hoặc chậm chạp, nặng nề) |
| 3526 | I had bought that ponderous book about VN culture | Tôi đã mua cuốn sách dày cộp/nặng nề đó về văn hóa VN |
| 3527 | Dizzy (adj/v) | Hoa mắt, chóng mặt |
| 3528 | It was a bit dizzying | Nó hơi chóng mặt một chút |
| 3529 | Restricted (adj) | Bị/có giới hạn |
| 3530 | Restricted development/access/potential/area | Sự phát triển/truy cập/tiềm năng/khu vực bị hạn chế |
| 3531 | Decorate / Decoration | Trang trí / Sự trang trí |
| 3532 | Deserve (v) | Xứng đáng |
| 3533 | Sporadic (adj) | Rời rạc, không thường xuyên |
| 3534 | Get along (v) | Xoay xở, hòa thuận |
| 3535 | Shield (from) | Bảo vệ, che chắn (khỏi cái gì) |
| 3536 | I am taking shower | Tôi đang tắm |
| 3537 | Momentarily = immediately | Ngay tức khắc, trong chốc lát |
| 3538 | I awake momentarily | Tôi tỉnh giấc ngay lập tức |
| 3539 | Awake / awoke / awoken | Đánh thức, thức giấc |
| 3540 | I awake the sleeping child | Tôi đánh thức đứa trẻ đang ngủ |
| 3541 | I awoke when someone entered the room. | Tôi thức giấc khi có ai đó bước vào phòng. |
| 3542 | Ban / banned (n/v) SO from ST | Cấm ai làm điều gì |
| 3543 | My parents banned me from leaving home in the night | Bố mẹ cấm tôi ra khỏi nhà vào ban đêm |
| 3544 | Booth (n) | Quán, rạp, lều (Anh-Mỹ_ phòng điện thoại công cộng) |
| 3545 | Bandage (n/v) | Băng gạc, miếng vải buộc quanh chỗ bị thương |
| 3546 | I just need to wear some bandage now around my finger | Bây giờ tôi chỉ cần băng một chút quanh ngón tay |
| 3547 | Swell / swelled / swollen | Sưng phồng lên |
| 3548 | Sprain (n/v) | Bong gân |
| 3549 | I had sprained one of my fingers at work. | Tôi bị bong gân một ngón tay khi làm việc. |
| 3550 | Waiter and Waitress | Nam và nữ phục vụ bàn |
| 3551 | Actor and Actress | Nam và nữ diễn viên |
| 3552 | Yearn (v) (for/after) | Mong mỏi, khao khát |
| 3553 | I yearn for you | Tôi khao khát em |
| 3554 | Pensive (adj) | Trầm ngâm |
| 3555 | Some of the faces looked a bit pensive | Một số khuôn mặt trông có vẻ trầm ngâm |
| 3556 | Leisure (n/adj) | Thời gian rỗi, rảnh rỗi |
| 3557 | Working all week without a moment’s leisure | Làm việc cả tuần không có một chút thời gian rảnh |
| 3558 | At leisure | Lúc rảnh rỗi |
| 3559 | Timing (n) | Sự chọn đúng thời điểm |
| 3560 | The art of timing | Nghệ thuật nói đúng lúc |
| 3561 | Subtle (adj) | Tế nhị, tinh tế |
| 3562 | Harm (n/v) | Sự tổn hại, sự thiệt hại (n) / Làm tổn hại (v) |
| 3563 | Coincidence (n) | Sự trùng hợp ngẫu nhiên |
| 3564 | Economic downturn | Suy sụp kinh tế |
| 3565 | Reinstate (v) | Phục hồi |
| 3566 | Reinstate somebody in the post of manager. | Phục hồi chức vụ quản lý cho ai đó. |
| 3567 | Interfere (v) | Can thiệp, xen vào |
| 3568 | Don’t interfere in matters that don’t concern you | Đừng can thiệp vào những việc không liên quan đến bạn |
| 3569 | Seize (v) | Chiếm giữ, nắm lấy |
| 3570 | He seized the meeting room | Anh ấy đã chiếm phòng họp |
| 3571 | Disproportioned / disproportionately | Không cân đối, không tương xứng |
| 3572 | Sake /seik/ (n) | Mục đích, lợi ích |
| 3573 | Fighting just for the sake of defending | Chiến đấu chỉ vì mục đích bảo vệ |
| 3574 | Blame (n/v) | Lời khiển trách (n) / Đổ lỗi, khiển trách (v) |
| 3575 | I don’t blame you | Tôi không trách bạn |
| 3576 | Draw / drew / drawn | Thu hút, lôi cuốn |
| 3577 | Something about you that just draw me to you | Có điều gì đó ở em cứ lôi cuốn tôi về phía em |
| 3578 | Proper (adj) | Thích hợp, đúng đắn |
| 3579 | At the proper time | Đúng lúc |
| 3580 | Shining (adj) | Sáng ngời |
| 3581 | Your stunning and shining eyes | Đôi mắt tuyệt vời và sáng ngời của em |
| 3582 | Stunning (adj) | Tuyệt vời, gây ấn tượng sâu sắc |
| 3583 | Amazingly | Đáng kinh ngạc, đến không ngờ |
| 3584 | My sister is amazingly good at English | Em gái tôi giỏi tiếng Anh một cách đáng kinh ngạc |
| 3585 | Adverse / adversely | Bất lợi, có hại |
| 3586 | No adversely impact will be caused | That will not cause any negative impact. |
| 3587 | Pinch | Véo |
| 3588 | To give SO a pinch | Véo ai đó một cái |
| 3589 | It hurts me | Làm tôi tổn thương/đau |
| 3590 | Fade | Mờ, phai đi |
| 3591 | The bruises will fade | Các vết bầm tím sẽ mờ đi |
| 3592 | The house collapsed | Ngôi nhà bị sập |
| 3593 | The motorbike is leaning | Chiếc xe máy đang bị nghiêng |
| 3594 | Skinny (adj) | Ốm, gầy nhom |
| 3595 | Seduce (v) | Cám dỗ, quyến rũ |
| 3596 | Money and position cannot seduce me | Tiền bạc và địa vị không thể cám dỗ tôi |
| 3597 | Get settled | Ổn định (cuộc sống, chỗ ở) |
| 3598 | Relieve (v) | Làm an tâm, giảm nhẹ |
| 3599 | To relieve SO’s mind | Làm ai đó an lòng |
| 3600 | To feel relieved | Cảm thấy an lòng, nhẹ nhõm |
| 3601 | I am on jet lag | Tôi bị mệt mỏi sau chuyến bay dài (lệch múi giờ) |
| 3602 | Pay-station | Trạm điện thoại tự động |
| 3603 | Pay-slip | Phiếu trả lương |
| 3604 | Sport | Thể thao |
| 3605 | European soccer championship | Giải vô địch bóng đá châu Âu |
| 3606 | Ache | Chịu đựng cơn đau, bị đau (to suffer from a continuous and dull pain) |
| 3607 | Ailment | Bị ốm, bị đau (a physical or mental illness or disorder) |
| 3608 | Bruise | Vết bầm (an injury in which the skin is not broken) |
| 3609 | Chemist Shop | Hiệu thuốc (British English) |
| 3610 | A viral infection | Nhiễm virus |
| 3611 | to release air suddenly from the lungs | Thải khí đột ngột ra khỏi phổi |
| 3612 | Dizzy | Cảm giác chóng mặt (to feel unsteady, unbalanced) |
| 3613 | Emergency | Tình trạng khẩn cấp |
| 3614 | Fever | an abnormally high body temperature |
| 3615 | Flu (Influenza) | Bị cúm |
| 3616 | Fracture | Gãy xương (when a bone in the body is broken or cracked) |
| 3617 | Graze | Vết xước (a slight scratch, scrape) |
| 3618 | Influenza | Lây nhiễm, bệnh cúm |
| 3619 | Surgery performed in a hospital may be referred to as an… | Operation |
| 3620 | Pain | Vết đau, nỗi đau |
| 3621 | Patient | Bệnh nhân |
| 3622 | Pharmacy | Hiệu thuốc (U.S English) |
| 3623 | Rash | Vết ngứa trên da, phát ban |
| 3624 | Sprain | Trật khớp, bong gân |
| 3625 | Symptoms | Triệu chứng (của bệnh) |
| 3626 | Most of us know we should have an annual checkup, but do we actually do it? | Hầu hết chúng ta đều biết mình nên đi kiểm tra sức khỏe hàng năm, nhưng chúng ta có thực sự làm điều đó không? |
| 3627 | If we have one every year, do we actually know if it is complete? | Nếu chúng ta đi khám hàng năm, liệu chúng ta có thực sự biết nó đã đầy đủ chưa? |
| 3628 | And do we understand the tests and examinations we are having done? | Và chúng ta có hiểu các xét nghiệm và kiểm tra mà chúng ta đang thực hiện không? |
| 3629 | Most of us will answer "no" to at least one of those questions. | Hầu hết chúng ta sẽ trả lời "không" cho ít nhất một trong những câu hỏi đó. |
| 3630 | However, there is no excuse for not having a thorough yearly exam. | Tuy nhiên, không có lý do gì để không khám tổng quát kỹ lưỡng hàng năm. |
| 3631 | Medicare is now covering many of the tests that should be done during your annual checkup. | Bảo hiểm y tế hiện đang chi trả cho nhiều xét nghiệm nên được thực hiện trong quá trình kiểm tra hàng năm của bạn. |
| 3632 | Blood Pressure_ Your blood pressure should be checked during every visit to your doctor. | Huyết áp_ Huyết áp của bạn nên được kiểm tra trong mỗi lần đến bác sĩ. |
| 3633 | Checking it at your yearly checkup will set a baseline. | Kiểm tra nó trong lần khám hàng năm sẽ thiết lập một mức cơ sở. |
| 3634 | Height_ Significant loss of height can indicate the acceleration of osteoporosis. | Chiều cao_ Việc giảm chiều cao đáng kể có thể cho thấy sự gia tăng của bệnh loãng xương. |
| 3635 | Height is lost as a result of compression of the spinal cord. | Chiều cao bị mất đi do sự nén của tủy sống. |
| 3636 | Weight_ Significant weight loss or gain without trying can signify serious health problems. | Cân nặng_ Giảm hoặc tăng cân đáng kể mà không chủ ý có thể biểu hiện các vấn đề sức khỏe nghiêm trọng. |
| 3637 | Weight gain can mean fluid retention or perhaps heart, liver or kidney disease. | Tăng cân có thể có nghĩa là giữ nước hoặc có lẽ là bệnh tim, gan hoặc thận. |
| 3638 | Weight loss could indicate infection or cancer. | Giảm cân có thể cho thấy nhiễm trùng hoặc ung thư. |
| 3639 | Blood Work_ Yearly blood work should include a blood count to rule out any bleeding problems, glucose levels to detect diabetes, thyroid function tests to rule out any thyroid disorder, and blood electrolyte counts, which can detect kidney problems and early heart problems. | Xét nghiệm máu_ Xét nghiệm máu hàng năm nên bao gồm công thức máu để loại trừ các vấn đề chảy máu, mức glucose để phát hiện bệnh tiểu đường, xét nghiệm chức năng tuyến giáp để loại trừ rối loạn tuyến giáp và số lượng điện giải trong máu, có thể phát hiện các vấn đề về thận và các vấn đề về tim sớm. |
| 3640 | Your doctor may also check some additional labs depending on your personal and family history. | Bác sĩ của bạn cũng có thể kiểm tra một số chỉ số bổ sung tùy thuộc vào tiền sử cá nhân và gia đình bạn. |
| 3641 | EKG_ It is recommended that a baseline EKG be done for both men and women around age 50. | Điện tâm đồ (EKG)_ Khuyến cáo rằng nên thực hiện EKG cơ sở cho cả nam và nữ khoảng 50 tuổi. |
| 3642 | It should then be done at least every two to three years, or more often if necessary. | Sau đó nên thực hiện ít nhất hai đến ba năm một lần, hoặc thường xuyên hơn nếu cần thiết. |
| 3643 | Fecal Occult Blood Test_ This test should also be done yearly. Blood in the stool can be an early indication of colorectal cancer. | Xét nghiệm máu ẩn trong phân_ Xét nghiệm này cũng nên được thực hiện hàng năm. Máu trong phân có thể là dấu hiệu sớm của ung thư đại trực tràng. |
| 3644 | Flexible Sigmoidoscopy/Colonoscopy_ The recommendation is that a sigmoidoscopy be done every four years or a colonoscopy every two years for anyone with a higher risk of colorectal cancer. | Nội soi đại tràng sigma/Nội soi đại tràng_ Khuyến cáo là nên nội soi đại tràng sigma bốn năm một lần hoặc nội soi đại tràng hai năm một lần đối với bất kỳ ai có nguy cơ mắc ung thư đại trực tràng cao hơn. |
| 3645 | Tests For Men | Các xét nghiệm cho Nam giới |
| 3646 | Prostate Exam_ Staring at age 50, a man should have a digital exam of his prostate. | Khám tuyến tiền liệt_ Bắt đầu từ tuổi 50, nam giới nên khám tuyến tiền liệt bằng tay (qua trực tràng). |
| 3647 | The physician uses a gloved finger in the rectum to determine if there is any enlargement of the prostate. | Bác sĩ sử dụng ngón tay đeo găng đưa vào trực tràng để xác định xem có bất kỳ sự phì đại nào của tuyến tiền liệt hay không. |
| 3648 | Enlargement could indicate benign enlargement or even cancer. | Phì đại có thể cho thấy phì đại lành tính hoặc thậm chí là ung thư. |
| 3649 | Prostate Specific Antigen (PSA)_ Prostate Specific Antigen is a blood test that can indicate prostate cancer. | Kháng nguyên đặc hiệu tuyến tiền liệt (PSA)_ Đây là xét nghiệm máu có thể chỉ ra ung thư tuyến tiền liệt. |
| 3650 | If the level is high, a biopsy of the prostate may be needed. | Nếu mức độ cao, có thể cần sinh thiết tuyến tiền liệt. |
| 3651 | Routine PSA screening is recommended by some doctors, but not by others. | Sàng lọc PSA định kỳ được một số bác sĩ khuyến nghị, nhưng những người khác thì không. |
| 3652 | Men over the age of 50 should discuss the pros and cons of PSA screening with their doctors. | Nam giới trên 50 tuổi nên thảo luận về những ưu và nhược điểm của việc sàng lọc PSA với bác sĩ của họ. |
| 3653 | Tests For Women | Các xét nghiệm cho Phụ nữ |
| 3654 | Mammogram_ Women over 50 should have regular screening, and many experts believe that routine mammograms should begin at age 40. | Chụp nhũ ảnh_ Phụ nữ trên 50 tuổi nên sàng lọc thường xuyên và nhiều chuyên gia tin rằng chụp nhũ ảnh định kỳ nên bắt đầu ở tuổi 40. |
| 3655 | Women between 40 and 50 should discuss the pros and cons of regular screening mammograms with their doctors. | Phụ nữ từ 40 đến 50 tuổi nên thảo luận về những ưu và nhược điểm của việc chụp nhũ ảnh sàng lọc thường xuyên với bác sĩ của họ. |
| 3656 | During the checkup, the doctor should perform a clinical breast exam. | Trong quá trình kiểm tra, bác sĩ nên thực hiện khám vú lâm sàng. |
| 3657 | Monthly self-breast exams should also be done, and you can be taught this technique during your yearly checkup. | Tự khám vú hàng tháng cũng nên được thực hiện, và bạn có thể được dạy kỹ thuật này trong lần kiểm tra hàng năm. |
| 3658 | Pap Smear and Pelvic Exam_ This test should be done every three years, or yearly if at higher risk for cervical or vaginal cancer. | Phết tế bào cổ tử cung và khám phụ khoa_ Xét nghiệm này nên được thực hiện ba năm một lần hoặc hàng năm nếu có nguy cơ ung thư cổ tử cung hoặc âm đạo cao hơn. |
| 3659 | Measurement of Bone Mass_ There is no standard for frequency of this exam. | Đo khối lượng xương_ Không có tiêu chuẩn về tần suất của xét nghiệm này. |
| 3660 | Women with a family or personal history that puts them at higher risk of osteoporosis should have this test. | Phụ nữ có tiền sử gia đình hoặc cá nhân có nguy cơ mắc bệnh loãng xương cao hơn nên thực hiện xét nghiệm này. |
| 3661 | Other Concerns | Các mối quan tâm khác |
| 3662 | You should review all medications with your doctor, even over-the-counter medications. | Bạn nên xem lại tất cả các loại thuốc với bác sĩ của mình, ngay cả thuốc không kê đơn. |
| 3663 | You should also discuss having a flu shot. | Bạn cũng nên thảo luận về việc tiêm phòng cúm. |
| 3664 | If the flu vaccine is not yet available during your exam, make a follow-up for that. | Nếu vắc-xin cúm chưa có sẵn trong quá trình khám, hãy hẹn theo dõi việc đó. |
| 3665 | If you are a diabetic, your doctor should examine your feet and order additional tests for your blood sugar. | Nếu bạn là người mắc bệnh tiểu đường, bác sĩ nên kiểm tra bàn chân của bạn và chỉ định thêm các xét nghiệm đường huyết. |
| 3666 | Your annual checkup is also the time to discuss any emotional problems you are having. | Kiểm tra hàng năm của bạn cũng là thời gian để thảo luận về bất kỳ vấn đề cảm xúc nào bạn đang gặp phải. |
| 3667 | If you feel sad or lack energy, tell your doctor. | Nếu bạn cảm thấy buồn hoặc thiếu năng lượng, hãy nói với bác sĩ. |
| 3668 | Your emotional health is just as important as your physical health. | Sức khỏe tinh thần của bạn cũng quan trọng như sức khỏe thể chất. |
| 3669 | Heal (v) | Chữa khỏi (bệnh), Làm lành (vết thương) |
| 3670 | Otorhinolaryngology clinic | Phòng khám khoa tai mũi họng |
| 3671 | Pediatrician (n) | Bác sĩ khoa nhi |
| 3672 | Otologist (n) | Bác sĩ khoa tai |
| 3673 | Clinic (n) /ˈklɪn·ɪk/ | Phòng khám chữa bệnh |
| 3674 | Phimose (n) | Chứng hẹp bao qui đầu |
| 3675 | Pills | Viên thuốc |
| 3676 | Sniff (v) /snɪf/ | Sổ mũi, khục khịt |
| 3677 | Rhinitis (n) [rai'naitis] | Viêm mũi |
| 3678 | Discharge /dɪsˈtʃɑrdʒ/ (v) | Cho về, cho xuất viện (người bệnh) |
| 3679 | Fluid /ˈflu·ɪd/ (n) | Chất lưu (gồm chất nước và chất khí trong vết thương) |
| 3680 | Some fluids coming out from the wound | Một số chất dịch chảy ra từ vết thương |
| 3681 | Wound /wɑʊnd/ (n) | Vết thương |
| 3682 | Immune / immunization (a/n) | Miễn dịch / Sự miễn dịch |
| 3683 | Allergy (n) | Dị ứng (với thức ăn hay thuốc) |
| 3684 | My brother has an allergy to see food | Anh trai tôi bị dị ứng với hải sản |
| 3685 | Diagnose (v) | Chẩn đoán |
| 3686 | Infection of (n) | Sự nhiễm trùng của |
| 3687 | Inflammation or infection of the larynx that results in hoarseness. | Viêm hoặc nhiễm trùng thanh quản dẫn đến khàn giọng. |
| 3688 | Inflammation (n) | Chứng viêm |
| 3689 | Inflammation of the lungs | Viêm phổi |
| 3690 | Laryngitis (n) | Viêm thanh quản |
| 3691 | Hoarseness (n) | Giọng khàn khàn |
| 3692 | Cure (v/n) | Chữa bệnh |
| 3693 | Bronchitis | Viêm phế quản |
| 3694 | Tonsillitis | Viêm amidan |
| 3695 | Antipyretic (n) | Thuốc hạ sốt |
| 3696 | Antibiotics | Thuốc kháng sinh |
| 3697 | Prescribe /prɪˈskrɑɪb/ (v) | Kê toa, kê thuốc (Give medical treatment) |
| 3698 | Did he prescribe you some antibiotics? | Ông ấy có kê đơn thuốc kháng sinh cho bạn không? |
| 3699 | Cold, Cough | Cảm lạnh, Ho |
| 3700 | Yeast /jist/ (n) | Men |
| 3701 | Stomach problems | Các vấn đề về dạ dày |
| 3702 | Prescribe antibiotics along with some yeast medicine to support your stomach | Kê đơn thuốc kháng sinh cùng với một số thuốc men để hỗ trợ dạ dày của bạn |
| 3703 | Pharmacy / Drugstore | Hiệu thuốc |
| 3704 | Pray Gods for luck and life in peace/safe | Cầu mong Thần linh ban may mắn và cuộc sống bình an |
| 3705 | Worship (v/n) | Thờ cúng |
| 3706 | Saint /seint/ | Thần thánh |
| 3707 | Heaven | Trời, thiên đàng |
| 3708 | Ancestor, Forefather | Ông bà, tổ tiên |
| 3709 | Kitchen God | Ông Táo |
| 3710 | Little / a little + noun (uncount.) | Dùng với danh từ không đếm được |
| 3711 | Little | Ít, không đủ để (làm gì) |
| 3712 | I have little money, not enough to buy groceries. | Tôi có ít tiền, không đủ để mua thực phẩm. |
| 3713 | A little | Có một chút, đủ để (làm gì) |
| 3714 | I have a little money, enough to buy groceries. | Tôi có một chút tiền, đủ để mua thực phẩm. |
| 3715 | Few / a few + noun (count.) | Dùng với danh từ đếm được |
| 3716 | Few | Có ít, không đủ để (làm gì) |
| 3717 | I have few books, not enough for reference reading. | Tôi có ít sách, không đủ để đọc tham khảo. |
| 3718 | A few | Có một vài, đủ để (làm gì) |
| 3719 | I have a few books, enough for reference reading. | Tôi có một vài sách, đủ để đọc tham khảo. |
| 3720 | Hope | hy vọng, nguồn hy vọng, Tin rằng nó có thể trở thành sự thật |
| 3721 | I hope your wife comes back soon. | Tôi hy vọng vợ bạn sẽ sớm quay lại. |
| 3722 | I hope you pass your exam tomorrow. | Tôi hy vọng bạn vượt qua kỳ thi ngày mai. |
| 3723 | I hope you feel better soon. | Tôi hy vọng bạn sớm cảm thấy khỏe hơn. |
| 3724 | Wish (Unreal situation) | Tình huống không có thật |
| 3725 | It’s too hot! I wish it would rain right now. | Trời nóng quá! Tôi ước trời mưa ngay bây giờ. |
| 3726 | Wish (Regret) | Một sự tiếc nuối |
| 3727 | I wish that I were 10 years younger. | Tôi ước rằng mình trẻ hơn 10 tuổi. |
| 3728 | Wish (Strong desire) | Một mong muốn mãnh liệt |
| 3729 | I wish I could break all the rules and live freely. | Tôi ước mình có thể phá vỡ mọi quy tắc và sống tự do. |
| 3730 | Wish (Good will) | Một lời chúc tốt đẹp |
| 3731 | We wish you a Merry Christmas. | Chúng tôi chúc bạn một Giáng sinh vui vẻ. |
| 3732 | Wish you a New Year full of happiness. | Chúc bạn một năm mới tràn đầy hạnh phúc. |
| 3733 | Wish (Formal) | Một cách nói lịch sự, trang trọng |
| 3734 | I wish to speak to the Lieutenant, please! | Tôi muốn nói chuyện với Đại úy, làm ơn! |
| 3735 | We do not wish that to happen. | Chúng tôi không muốn điều đó xảy ra. |
| 3736 | Wait, I think I see something! | Đợi đã, tôi nghĩ tôi thấy cái gì đó! |
| 3737 | I looked at him. He had changed a lot. | Tôi nhìn anh ấy. Anh ấy đã thay đổi rất nhiều. |
| 3738 | I looked out the window and saw him standing right at the door. | Tôi nhìn ra cửa sổ và thấy anh ấy đang đứng ngay cửa. |
| 3739 | I watch him walk away without any regret | Tôi nhìn anh ta bước đi mà không hề hối tiếc |
| 3740 | Next time, please stay awake and watch the game from the beginning till the end. | Lần sau, hãy tỉnh táo và xem trận đấu từ đầu đến cuối. |
| 3741 | Did you hear what I just said? | Bạn có nghe thấy những gì tôi vừa nói không? |
| 3742 | Sorry, I wasn’t listening. | Xin lỗi, tôi đã không lắng nghe. |
| 3743 | Did you hear that? | Bạn có nghe thấy tiếng đó không? |
| 3744 | That! Listen, it comes again. | Đó! Nghe đi, nó lại đến nữa kìa. |
| 3745 | I know you are in there! I heard the TV. | Tôi biết bạn ở trong đó! Tôi nghe thấy tiếng TV. |
| 3746 | I listen to the Radio every morning. | Tôi nghe đài mỗi sáng. |
| 3747 | FEELING | CẢM XÚC |
| 3748 | Emotional (adj) | Xúc động, cảm động, dễ xúc động |
| 3749 | Mood | Tâm trạng |
| 3750 | I was very upset then, even furious | Lúc đó tôi rất bực bội, thậm chí là giận điên tiết |
| 3751 | That was foul play | Đó là lối chơi tồi/xấu (thô lỗ) |
| 3752 | The more you get angry, the more vulnerable you get, for other people to hurt you. | Bạn càng tức giận, bạn càng dễ bị tổn thương, để người khác làm tổn thương bạn. |
| 3753 | Taste ['teist] | Vị giác, nếm |
| 3754 | Bitter | Đắng |
| 3755 | This coffee is too bitter | Cà phê này đắng quá |
| 3756 | Sour | Chua |
| 3757 | A sour apple | Một quả táo chua |
| 3758 | Salty | Mặn |
| 3759 | The soup is too salty | Món súp quá mặn |
| 3760 | Tasteless ['teistlis] | Nhạt nhẽo (thiếu muối hoặc đường) |
| 3761 | Acrid | Chát |
| 3762 | The green banana tastes pretty acrid | Chuối xanh có vị khá chát |
| 3763 | RELIGION | TÔN GIÁO |
| 3764 | Buddhism | Đạo Phật |
| 3765 | Catholicism | Đạo Thiên Chúa |
| 3766 | Protestantism | Đạo Tin Lành |
| 3767 | Islam | Đạo Hồi |
| 3768 | Over 70 percent of the population of Vietnam are either Buddhist or strongly influenced by Buddhist practices. | Hơn 70 phần trăm dân số Việt Nam là Phật tử hoặc chịu ảnh hưởng mạnh mẽ bởi các thực hành Phật giáo. |
| 3769 | About 10 percent of the population is considered to be catholic. | Khoảng 10 phần trăm dân số được coi là người theo đạo Thiên Chúa. |
| 3770 | The number of Protestants is estimated at a mere 400,000. | Số lượng người theo đạo Tin Lành ước tính chỉ khoảng 400.000 (nhỏ, không đáng kể). |
| 3771 | Most of the Islamic followers in Vietnam are those of the Cham ethnic minority group living in the central part of the central coast. | Hầu hết các tín đồ Hồi giáo ở Việt Nam là những người thuộc nhóm dân tộc thiểu số Chăm sống ở miền trung của bờ biển miền trung. |
| 3772 | The number of Islamic followers in Vietnam totals about 50,000. | Số lượng tín đồ Hồi giáo tại Việt Nam tổng cộng khoảng 50.000. |
| 3773 | Religious (adj) | Thuộc về tôn giáo, sùng đạo |
| 3774 | I have no religious belief | Tôi không có niềm tin tôn giáo |
| 3775 | Church | Nhà thờ |
| 3776 | Cathedral | Nhà thờ lớn, thánh đường |
| 3777 | Bible | Kinh thánh |
| 3778 | Nun | Bà xơ, nữ tu sĩ |
| 3779 | Prayer | Buổi cầu nguyện |
| 3780 | Pope | Giáo hoàng |
| 3781 | Choir | Dàn hợp ca trong nhà thờ |
| 3782 | Communion | Lễ ban thánh |
| 3783 | Chalice | Ly/cốc nước thánh |
| 3784 | Baptism | Lễ rửa tội |
| 3785 | Pagoda, Temple | Chùa, Đền |
| 3786 | Chat up (Starting a relationship) | Bắt chuyện làm quen (Bắt đầu một mối quan hệ) |
| 3787 | To chat (somebody) up | Nói chuyện với ai đó với hy vọng bắt đầu một mối quan hệ lãng mạn hoặc tình dục |
| 3788 | To flirt (with somebody) | Tán tỉnh (Hành xử trêu đùa với người khác mà bạn bị thu hút hoặc giả vờ bị thu hút) |
| 3789 | A flirt | Một người thích tán tỉnh |
| 3790 | A blind date | Buổi hẹn hò giấu mặt (được sắp xếp bởi bên thứ ba với người bạn chưa từng gặp) |
| 3791 | Lonely hearts | Mục tìm bạn trăm năm (trên báo, tạp chí) |
| 3792 | WLTM (would like to meet) | Muốn gặp gỡ |
| 3793 | GSOH (good sense of humor) | Có khiếu hài hước tốt |
| 3794 | LTR (long-term relationship) | Mối quan hệ lâu dài |
| 3795 | Loved up (Being in a relationship) | Đang yêu (Đang trong một mối quan hệ) |
| 3796 | To be smitten with somebody | Say mê ai đó (bị ảnh hưởng sâu sắc bởi tình yêu) |
| 3797 | To fall for somebody | Phải lòng ai đó (yêu ai đó) |
| 3798 | It was love at first sight | Tình yêu sét đánh (yêu nhau ngay lần đầu gặp gỡ) |
| 3799 | To take the plunge | Quyết định đính hôn/kết hôn (làm một việc quan trọng sau khi đắn đo) |
| 3800 | I can hear wedding bells | Tôi nghi là họ sắp kết hôn |
| 3801 | Terms of endearment | Những từ ngữ âu yếm (tên gọi thân mật) |
| 3802 | Darling, sweetheart, love, pet, babe/baby, cutie pie, honey bunny | Cưng, người yêu, tình yêu, thú cưng, bé cưng, bánh nướng dễ thương, thỏ mật ong (các từ gọi âu yếm) |
| 3803 | Break up (Finishing a relationship) | Chia tay (Kết thúc mối quan hệ) |
| 3804 | They are having a domestic (informal) | Họ đang cãi nhau (chuyện trong nhà) |
| 3805 | They are having an argument | Họ đang tranh cãi |
| 3806 | They have blazing rows | Họ cãi nhau nảy lửa |
| 3807 | They have very serious, often noisy arguments | Họ có những cuộc tranh cãi rất nghiêm trọng, thường ồn ào |
| 3808 | In this negotiation, we are playing away from home. | Manchester United is playing away from home tonight. |
| 3809 | (S)he is having an affair | Anh ấy/Cô ấy đang ngoại tình |
| 3810 | To break up with somebody | Chia tay với ai đó |
| 3811 | To finish a relationship with somebody | Kết thúc mối quan hệ với ai đó |
| 3812 | To split up | Tan vỡ, chia đôi |
| 3813 | To break up | Chia tay |
| 3814 | To dump somebody | Đá ai đó (bỏ rơi) |
| 3815 | To finish a relationship with somebody without much thought for the other person | Kết thúc mối quan hệ mà không suy nghĩ nhiều cho người kia |
| 3816 | Break-up lines | Những câu nói chia tay |
| 3817 | We need to talk | Chúng ta cần nói chuyện |
| 3818 | I just need some space | Anh/em cần một chút không gian riêng |
| 3819 | It's not you, it's me | Không phải tại anh/em, là tại tôi |
| 3820 | I hope that we can always be friends | Tôi hy vọng chúng ta mãi là bạn |
| 3821 | This is hurting me more than it is hurting you | Điều này làm tôi đau lòng hơn là làm bạn đau |
| 3822 | It's not enough that we love each other | Chỉ yêu nhau thôi là chưa đủ |
| 3823 | It simply wasn't meant to be | Đơn giản là chúng ta không thuộc về nhau (không có duyên) |
| 3824 | A foreseeable plot | Cốt truyện có thể đoán trước |
| 3825 | Action film | Phim hành động |
| 3826 | Cartoon | Phim hoạt hình |
| 3827 | Detective film | Phim trinh thám |
| 3828 | Documentary film | Phim tài liệu |
| 3829 | Educational film | Phim giáo dục |
| 3830 | Horror film | Phim kinh dị |
| 3831 | Love story / romantic film | Phim tình cảm |
| 3832 | Science-fiction film | Phim khoa học viễn tưởng |
| 3833 | Western movies simply mean … | cowboys film |
| 3834 | Short-length / full-length film | Phim ngắn / Phim dài |
| 3835 | Silent film | Phim câm |
| 3836 | Primary /’praimori/ school (or elementary) | Trường tiểu học |
| 3837 | To go to primary school a year early | Vào tiểu học sớm một tuổi |
| 3838 | Secondary school | Trường trung học cơ sở |
| 3839 | High school (or tertiary) | Trường trung học phổ thông |
| 3840 | College | Trường Cao đẳng |
| 3841 | University | Trường Đại học |
*/
}).toString().match(/\/\*([\s\S]*)\*\//)[1].trim();