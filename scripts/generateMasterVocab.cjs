/**
 * Comprehensive Primary English Vocabulary Dictionary Generator
 * Global Success Curriculum Grades 1 - 5 + Primary ESL Core
 */
const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '../src/data/comprehensiveVocabKnowledgeBase.ts');

const items = [];

function add(word, ipa, type, category, explanation, vn, sentence, tpr, img) {
  items.push({
    word,
    ipa,
    type,
    category,
    explanation,
    vn,
    sentence,
    tpr: tpr || `Giáo viên hướng dẫn học sinh luyện đọc từ '${word}' và thực hành giao tiếp.`,
    img: img || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'
  });
}

// -------------------------------------------------------------
// 1. CHARACTERS & GREETINGS & BASICS
// -------------------------------------------------------------
add('hello', '/həˈləʊ/', 'Interjection', 'Greetings & Phrases', 'We say this word when we meet a friend or teacher.', 'xin chào', 'Hello, I am Mai. Nice to meet you!', 'Vẫy tay mỉm cười chào cả lớp: "Wave hand and say Hello!"', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('hi', '/haɪ/', 'Interjection', 'Greetings & Phrases', 'A short, cheerful word used to greet a classmate or close friend.', 'chào bạn', 'Hi, Nam! How are you today?', 'Giơ một tay lên ngang vai và mỉm cười thân thiện.', 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80');
add('goodbye', '/ˌɡʊdˈbaɪ/', 'Interjection', 'Greetings & Phrases', 'Words said when parting from someone at the end of class.', 'tạm biệt', 'Goodbye, teacher! See you tomorrow.', 'Vẫy tay nhẹ nhàng chào tạm biệt khi tan học.', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80');
add('bye', '/baɪ/', 'Interjection', 'Greetings & Phrases', 'A quick, friendly word said when leaving your friends.', 'tạm biệt / chào nhé', 'Bye, Lucy! Have a nice weekend.', 'Vẫy tay nhẹ và quay bước đi.', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80');
add('welcome', '/ˈwelkəm/', 'Interjection', 'Greetings & Phrases', 'Said warmly to greet someone arriving at a place.', 'chào mừng / hoan nghênh', 'Welcome to our primary school!', 'Mở rộng hai cánh tay đón chào các bạn học sinh.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('welcome back', '/ˈwelkəm bæk/', 'Phrase', 'Greetings & Phrases', 'Said happily to greet someone returning after a holiday.', 'chào mừng bạn quay trở lại', 'Welcome back to class, everyone!', 'Vỗ tay nhiệt liệt chào đón cả lớp trở lại sau kỳ nghỉ.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('fine', '/faɪn/', 'Adjective', 'Greetings & Phrases', 'Feeling healthy, well, and in good spirits.', 'khỏe mạnh / tốt', 'I am fine, thank you. And you?', 'Giơ ngón tay cái biểu thị khỏe mạnh, tuyệt vời.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('thank you', '/ˈθæŋk juː/', 'Phrase', 'Greetings & Phrases', 'Polite words spoken to show gratitude when someone helps you.', 'cảm ơn bạn / em cảm ơn cô', 'Thank you very much, teacher!', 'Đặt bàn tay lên ngực và khẽ cúi đầu cảm ơn.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('thanks', '/θæŋks/', 'Interjection', 'Greetings & Phrases', 'A quick, warm way to say thank you to friends.', 'cảm ơn nhé', 'Here is your pencil. - Thanks!', 'Cười tươi và gật đầu cảm ơn bạn.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('yes', '/jes/', 'Interjection', 'Greetings & Phrases', 'Spoken to show agreement or give a positive answer.', 'vâng / đúng vậy / có', 'Do you have a pet? - Yes, I do.', 'Gật đầu đồng ý dứt khoát: "Yes!".', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80');
add('no', '/nəʊ/', 'Interjection', 'Greetings & Phrases', 'Spoken to show disagreement or give a negative answer.', 'không / không phải', 'Is this your bag? - No, it isn\'t.', 'Lắc đầu nhẹ và vẫy tay từ chối: "No".', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80');
add('nice to meet you', '/naɪs tu miːt juː/', 'Phrase', 'Greetings & Phrases', 'A polite, warm phrase said when meeting someone for the first time.', 'rất vui được gặp bạn', 'Nice to meet you, Mary! - Nice to meet you, too.', 'Chủ động đưa tay ra bắt tay bạn mới với nụ cười tươi.', 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80');

// Characters
add('Mai', '/maɪ/', 'Proper Noun', 'Characters & People', 'A cheerful schoolgirl in Vietnam. She is a main student character in our English book.', 'bạn Mai (nhân vật học sinh)', 'Hello, I am Mai. I am eight years old.', 'Chỉ vào tranh bạn Mai trong SGK Global Success.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('Nam', '/næm/', 'Proper Noun', 'Characters & People', 'An energetic schoolboy in Vietnam. He loves sports and studies in Grade 3.', 'bạn Nam (nhân vật học sinh)', 'This is Nam. He likes playing football.', 'Chỉ vào bạn Nam và làm động tác sút bóng thể thao.', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('Ben', '/ben/', 'Proper Noun', 'Characters & People', 'A friendly boy from Britain. He learns and speaks English with Vietnamese friends.', 'bạn Ben (bạn học người Anh)', 'Hi, I am Ben. I am from Britain.', 'Chỉ vào nhân vật bạn Ben trong sách.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80');
add('Lucy', '/ˈluːsi/', 'Proper Noun', 'Characters & People', 'A friendly, cheerful girl from Britain. She is a student character in our book.', 'bạn Lucy (nhân vật học sinh)', 'This is Lucy. She is my new classmate.', 'Chỉ vào hình ảnh bạn Lucy trong SGK.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('Mary', '/ˈmeəri/', 'Proper Noun', 'Characters & People', 'A friendly girl from America. She loves reading books and playing with friends.', 'bạn Mary (bạn học trong sách)', 'Is that Mary? - Yes, it is.', 'Chỉ vào nhân vật Mary.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('Peter', '/ˈpiːtə(r)/', 'Proper Noun', 'Characters & People', 'A friendly boy from Britain. He is good at playing chess and swimming.', 'bạn Peter (bạn học trong sách)', 'My name is Peter. I like playing chess.', 'Chỉ vào nhân vật Peter.', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('Bill', '/bɪl/', 'Proper Noun', 'Characters & People', 'A lively boy in our English lessons who enjoys drawing and outdoor games.', 'bạn Bill (nhân vật bạn học)', 'This is Bill. He is my friend.', 'Chỉ vào hình ảnh bạn Bill.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80');
add('Linh', '/lɪŋ/', 'Proper Noun', 'Characters & People', 'A kind Vietnamese primary pupil who enjoys singing and reading.', 'bạn Linh (bạn học trong sách)', 'Her name is Linh. She has big eyes.', 'Chỉ vào bạn Linh trong tranh.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('Mr Long', '/ˈmɪstə(r) lɒŋ/', 'Proper Noun', 'Characters & People', 'The kind and respected male English teacher at our primary school.', 'thầy Long (thầy giáo)', 'Good morning, Mr Long! - Good morning, class.', 'Khoanh tay cúi đầu lễ phép chào thầy giáo.', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80');
add('Miss Hien', '/mɪs hiən/', 'Proper Noun', 'Characters & People', 'The gentle and caring female teacher at our primary school.', 'cô Hiền (cô giáo)', 'Goodbye, Miss Hien! - Goodbye, see you tomorrow.', 'Khoanh tay cúi đầu lễ phép chào cô giáo.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80');

// Pronouns & Function
add('I', '/aɪ/', 'Pronoun', 'Grammar & Words', 'Used by the speaker to refer to oneself.', 'tôi / mình / em', 'I am eight years old.', 'Tự đặt bàn tay lên ngực mình để chỉ bản thân: "I".', 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80');
add('am', '/æm/', 'Verb', 'Grammar & Words', 'Used with the pronoun for oneself to state who or how you are.', 'thì / là (đi với I)', 'I am a student at primary school.', 'Đặt tay lên ngực và gật đầu tự tin.', 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80');
add('is', '/ɪz/', 'Verb', 'Grammar & Words', 'Used with a singular person or object to say what or how it is.', 'thì / là (số ít)', 'This is my school bag.', 'Chỉ tay vào một đồ vật gần mình.', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80');
add('are', '/ɑː(r)/', 'Verb', 'Grammar & Words', 'Used with "you", "we", or "they" to describe people or things.', 'thì / là (số nhiều / đi với you)', 'We are happy students.', 'Xòe hai tay hướng về phía bạn bè.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80');
add('he', '/hiː/', 'Pronoun', 'Grammar & Words', 'Used to refer to a boy, man, or male person already mentioned.', 'cậu ấy / anh ấy / ông ấy', 'He is my friend. He is eight.', 'Chỉ tay nhẹ về phía một bạn trai.', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('she', '/ʃiː/', 'Pronoun', 'Grammar & Words', 'Used to refer to a girl, woman, or female person already mentioned.', 'cô ấy / bạn ấy / bà ấy', 'She is my sister. She has long hair.', 'Chỉ tay nhẹ về phía một bạn gái.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('this', '/ðɪs/', 'Pronoun', 'Grammar & Words', 'Used to point to a person or thing that is close to the speaker.', 'đây / cái này (ở gần)', 'This is my ruler on the desk.', 'Chỉ ngón tay trỏ vào một vật ở ngay trước mặt: "This".', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('that', '/ðæt/', 'Pronoun', 'Grammar & Words', 'Used to point to a person or thing that is further away from you.', 'kia / cái kia (ở xa)', 'That is our classroom over there.', 'Duỗi thẳng cánh tay chỉ vào một vật ở xa: "That".', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('what', '/wɒt/', 'Pronoun', 'Inquiry & Questions', 'Used to ask for specific information about things or someone\'s name.', 'cái gì / gì', 'What is your name? - My name is Nam.', 'Ngửa hai lòng bàn tay, nhún vai thắc mắc: "What?"', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80');
add('how', '/haʊ/', 'Adverb', 'Inquiry & Questions', 'Used to ask about someone\'s health, feelings, or how things are done.', 'như thế nào / làm sao', 'How are you today? - I am fine, thank you.', 'Nghiêng đầu mỉm cười hỏi thăm bạn.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('where', '/weə(r)/', 'Adverb', 'Inquiry & Questions', 'Used to ask about the place or location of someone or something.', 'ở đâu', 'Where is my pen? - It is on the table.', 'Đưa tay lên trán nhìn quanh tìm kiếm vị trí.', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80');
add('who', '/huː/', 'Pronoun', 'Inquiry & Questions', 'Used to ask about the identity of a person.', 'ai / là ai', 'Who is that? - That is my teacher.', 'Chỉ tay về một người và làm động tác hỏi: "Who?"', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80');
add('when', '/wen/', 'Adverb', 'Inquiry & Questions', 'Used to ask about the time or date an event happens.', 'khi nào / vào lúc nào', 'When is your sports day? - It is in November.', 'Chỉ ngón tay vào đồng hồ đeo tay: "When?"', 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop&q=80');
add('why', '/waɪ/', 'Adverb', 'Inquiry & Questions', 'Used to ask for the reason or purpose of something.', 'tại sao / vì sao', 'Why do you like English? - Because it is fun.', 'Xòe hai tay, nghiêng đầu thắc mắc lý do.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80');
add('your', '/jɔː(r)/', 'Determiner', 'Grammar & Words', 'Belonging to or associated with the person being spoken to.', 'của bạn / của em', 'What is your hobby? - I like singing.', 'Chỉ tay về phía đồ vật của bạn đối diện.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('my', '/maɪ/', 'Determiner', 'Grammar & Words', 'Belonging to or associated with the person who is speaking.', 'của tôi / của mình', 'This is my English book.', 'Áp hai bàn tay vào ngực mình: "My".', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('name', '/neɪm/', 'Noun', 'School & Self', 'The word by which a specific person, place, or thing is known.', 'tên gọi', 'What is your name? - My name is Nam.', 'Chỉ tay vào bảng tên đeo trước ngực.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('friend', '/frend/', 'Noun', 'School & Self', 'A person whom one knows, likes, trusts, and enjoys playing with.', 'người bạn', 'Mai is my best friend in class.', 'Khoác vai bạn bên cạnh hoặc bắt tay thân thiện.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80');
add('classmate', '/ˈklɑːsmeɪt/', 'Noun', 'School & Self', 'A student who learns together with you in the same classroom.', 'bạn cùng lớp', 'Peter is my new classmate.', 'Chỉ tay quanh phòng học vào các bạn học sinh.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80');
add('spell', '/spel/', 'Verb', 'School & Actions', 'To write or say the letters of a word in correct order.', 'đánh vần chữ cái', 'How do you spell your name? - M-A-I.', 'Dùng ngón tay trỏ viết từng chữ cái trong không khí.', 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80');
add('alphabet', '/ˈælfəbet/', 'Noun', 'School & Self', 'The complete set of letters from A to Z used in a language.', 'bảng chữ cái', 'Sing the alphabet song with me!', 'Chỉ tay vào bảng chữ cái tiếng Anh treo trên tường.', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80');
add('hobby', '/ˈhɒbi/', 'Noun', 'Hobbies & Activities', 'A favorite fun activity that you love doing in your free time.', 'sở thích', 'What is your hobby? - I like swimming.', 'Cười tươi và làm động tác thể hiện sở thích của mình.', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 2. FAMILY MEMBERS (GIA ĐÌNH)
// -------------------------------------------------------------
add('family', '/ˈfæməli/', 'Noun', 'Family & People', 'Parents and their children living together in love and care.', 'gia đình', 'I love my family very much.', 'Vẽ hình trái tim trước ngực: "I love my family!"', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80');
add('father', '/ˈfɑːðə(r)/', 'Noun', 'Family & People', 'The male parent in a family. He loves, guides, and protects his children.', 'người bố / người cha', 'This is my father. He is thirty-eight years old.', 'Làm động tác giơ bắp tay khỏe mạnh thể hiện sự che chở của bố.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80');
add('mother', '/ˈmʌðə(r)/', 'Noun', 'Family & People', 'The female parent in a family. She loves, feeds, and nurtures her children.', 'người mẹ', 'Who is this? - This is my mother. She is very kind.', 'Làm động tác ôm ấp dịu dàng của mẹ.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80');
add('brother', '/ˈbrʌðə(r)/', 'Noun', 'Family & People', 'A boy or man who has the same parents as you.', 'anh trai / em trai', 'My brother likes playing football in the yard.', 'Khoác vai một bạn trai và mỉm cười: "My brother".', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('sister', '/ˈsɪstə(r)/', 'Noun', 'Family & People', 'A girl or woman who has the same parents as you.', 'chị gái / em gái', 'My sister is singing a sweet English song.', 'Nắm tay một bạn gái thân thiết: "My sister".', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('grandfather', '/ˈɡrænfɑːðə(r)/', 'Noun', 'Family & People', 'The father of your father or mother.', 'ông nội / ông ngoại', 'My grandfather is sixty-five years old.', 'Làm động tác vuốt râu hoặc chống gậy mỉm cười hiền từ.', 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=600&auto=format&fit=crop&q=80');
add('grandmother', '/ˈɡrænmʌðə(r)/', 'Noun', 'Family & People', 'The mother of your father or mother.', 'bà nội / bà ngoại', 'My grandmother tells me wonderful bedtime stories.', 'Làm động tác đeo kính đọc truyện hiền hậu của bà.', 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&auto=format&fit=crop&q=80');
add('grandparents', '/ˈɡrænpeərənts/', 'Noun', 'Family & People', 'The parents of your father or mother together.', 'ông bà', 'I often visit my grandparents at weekends.', 'Khoanh tay kính yêu hướng về ông bà.', 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&auto=format&fit=crop&q=80');
add('baby', '/ˈbeɪbi/', 'Noun', 'Family & People', 'A very young child who cannot walk or talk yet.', 'em bé / đứa trẻ sơ sinh', 'Look at the cute baby sleeping in the crib.', 'Hai tay làm động tác bế và ru em bé ngủ: "Rock a baby".', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80');
add('boy', '/bɔɪ/', 'Noun', 'Family & People', 'A male child or young male student.', 'cậu bé / bạn nam', 'He is a friendly boy in my class.', 'Chỉ vào bạn nam trong lớp.', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('girl', '/ɡɜːl/', 'Noun', 'Family & People', 'A female child or young female student.', 'cô bé / bạn nữ', 'She is a smart girl who loves reading.', 'Chỉ vào bạn nữ trong lớp.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 3. BODY PARTS (CƠ THỂ)
// -------------------------------------------------------------
add('eye', '/aɪ/', 'Noun', 'Body parts', 'The organ of vision on your face. We use it to see colors and shapes.', 'con mắt', 'She has two bright brown eyes.', 'Chỉ nhẹ hai ngón tay vào hai bên mắt: "Point to your eyes!"', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('ear', '/ɪər/', 'Noun', 'Body parts', 'The organ of hearing on your head. We use it to listen to music and voices.', 'cái tai', 'Touch your ears, please.', 'Chạm hai tay vào hai tai và làm động tác lắng nghe.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('nose', '/nəʊz/', 'Noun', 'Body parts', 'The feature on your face between eyes and mouth used for smelling and breathing.', 'cái mũi', 'Touch your nose and smile.', 'Chạm ngón tay lên mũi và làm động tác ngửi hương hoa.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('mouth', '/maʊθ/', 'Noun', 'Body parts', 'The opening on your face with teeth and tongue used for eating and speaking.', 'cái miệng', 'Open your mouth wide and say Ah.', 'Chỉ vào miệng, mở miệng phát âm /θ/ chuẩn xác.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('face', '/feɪs/', 'Noun', 'Body parts', 'The front part of your head from forehead to chin, with eyes, nose, and mouth.', 'khuôn mặt', 'Wash your face with clean water.', 'Dùng hai bàn tay xoa tròn quanh mặt như đang rửa mặt.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('hand', '/hænd/', 'Noun', 'Body parts', 'The part at the end of each arm with five fingers used for holding objects.', 'bàn tay', 'Wash your hands before eating.', 'Xòe hai bàn tay và vỗ tay nhịp nhàng: "Clap your hands!"', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('arm', '/ɑːm/', 'Noun', 'Body parts', 'The upper limb of the human body extending from shoulder to hand.', 'cánh tay', 'Raise your arms high in the air.', 'Giơ hai cánh tay lên cao và vẫy nhẹ.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('leg', '/leɡ/', 'Noun', 'Body parts', 'Each of the limbs on which a person stands, walks, and runs.', 'cái chân', 'Stand on one leg for five seconds.', 'Đứng trụ một chân và nhấc nhẹ chân còn lại.', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&auto=format&fit=crop&q=80');
add('foot', '/fʊt/', 'Noun', 'Body parts', 'The lowest part of your leg that touches the floor when standing.', 'bàn chân', 'Stamp your feet on the floor.', 'Dậm chân xuống sàn nhịp nhàng: "Stamp your feet!"', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&auto=format&fit=crop&q=80');
add('hair', '/heə(r)/', 'Noun', 'Body parts', 'The fine strands growing on top of a person\'s head.', 'mái tóc', 'She has long black hair.', 'Lấy tay vuốt nhẹ mái tóc mỉm cười.', 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80');
add('head', '/hed/', 'Noun', 'Body parts', 'The upper part of your body containing the brain, eyes, ears, nose, and mouth.', 'cái đầu', 'Nod your head and say yes.', 'Gật đầu nhịp nhàng theo câu khẩu lệnh.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('touch', '/tʌtʃ/', 'Verb', 'Body & Actions', 'To put your finger or hand gently against something.', 'chạm vào / sờ', 'Touch your nose, please.', 'Chạm nhẹ đầu ngón tay vào mũi hoặc tai theo hiệu lệnh.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 4. SCHOOL THINGS & CLASSROOM (ĐỒ DÙNG HỌC TẬP)
// -------------------------------------------------------------
add('pencil', '/ˈpensl/', 'Noun', 'School things', 'A wooden writing instrument with graphite inside used for writing and drawing.', 'bút chì', 'I write new words with a yellow pencil.', 'Cầm bút chì giơ lên và làm động tác viết chữ trong không khí.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('pen', '/pen/', 'Noun', 'School things', 'A writing tool with dark blue or black ink used for smooth writing.', 'bút mực / bút bi', 'This blue pen writes very smoothly.', 'Cầm chiếc bút bi và ký tên giả định trên giấy.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('book', '/bʊk/', 'Noun', 'School things', 'Pages bound together with stories, words, and pictures for reading.', 'quyển sách', 'Open your English book to page ten.', 'Chắp hai bàn tay lại rồi mở ra như đang mở trang sách.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80');
add('ruler', '/ˈruːlə(r)/', 'Noun', 'School things', 'A straight strip of plastic or wood used for measuring and drawing straight lines.', 'cây thước kẻ', 'Draw a straight line with this blue ruler.', 'Giơ thước kẻ và dùng ngón tay kẻ một đường thẳng tắp.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('eraser', '/ɪˈreɪzə(r)/', 'Noun', 'School things', 'A small piece of soft rubber used to clean pencil marks off paper.', 'cục tẩy / gôm', 'May I borrow your eraser, please?', 'Dùng ngón tay miết nhẹ lên bàn như đang tẩy vết chì.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('rubber', '/ˈrʌbə(r)/', 'Noun', 'School things', 'A piece of soft material used to rub out pencil marks.', 'cục tẩy / gôm', 'Use this rubber to fix your mistake.', 'Làm động tác tẩy nhẹ trang giấy.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('school bag', '/ˈskuːl bæɡ/', 'Noun', 'School things', 'A backpack or bag used by students to carry books and supplies to school.', 'cặp sách / ba lô đi học', 'Put your books inside your school bag.', 'Làm động tác đeo hai quai ba lô lên vai: "Wear your bag!"', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80');
add('bag', '/bæɡ/', 'Noun', 'School things', 'A container made of flexible material with handles for carrying things.', 'cặp sách / túi xách', 'My school bag is blue and yellow.', 'Khoác túi lên vai và mỉm cười.', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80');
add('pencil case', '/ˈpensl keɪs/', 'Noun', 'School things', 'A small pouch or zippered box for holding pens, pencils, and erasers.', 'hộp bút / bóp viết', 'I keep my pencils inside this pencil case.', 'Làm động tác kéo khóa hộp bút và lấy bút ra.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('pencil sharpener', '/ˈpensl ˈʃɑːpnə(r)/', 'Noun', 'School things', 'A small device with a blade used to sharpen the point of a pencil.', 'cái gọt bút chì', 'Sharpen your pencil before writing.', 'Làm động tác xoay tròn gọt đầu bút chì.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('notebook', '/ˈnəʊtbʊk/', 'Noun', 'School things', 'A book with ruled pages for students to write notes and exercises.', 'quyển vở ghi bài', 'Write the new words in your notebook.', 'Mở trang vở và làm động tác nắn nót viết từng dòng chữ.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('desk', '/desk/', 'Noun', 'School & Classroom', 'A piece of furniture like a table with drawers where pupils sit to study.', 'bàn học', 'Sit at your desk and open your books.', 'Hai tay đặt ngay ngắn lên mặt bàn học.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('chair', '/tʃeə(r)/', 'Noun', 'School & Classroom', 'A piece of furniture with four legs and a back for one person to sit on.', 'cái ghế', 'Sit down on your chair quietly.', 'Làm động tác ngồi ngay ngắn vào ghế.', 'https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=80');
add('board', '/bɔːd/', 'Noun', 'School & Classroom', 'A large dark or white surface on a classroom wall for teachers to write on.', 'bảng lớp học', 'Look at the board, please.', 'Chỉ tay hướng về phía bảng lớp học.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('school', '/skuːl/', 'Noun', 'School & Places', 'An institution where children go to learn with teachers and friends.', 'trường học', 'Is this our school? - Yes, it is big and beautiful.', 'Tạo hình mái nhà bằng hai cánh tay: "Our school".', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80');
add('classroom', '/ˈklɑːsruːm/', 'Noun', 'School & Places', 'A room in a school where students and teachers have lessons.', 'phòng học / lớp học', 'Our classroom is very bright and clean.', 'Mở rộng hai tay chỉ quanh phòng học.', 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80');
add('library', '/ˈlaɪbrəri/', 'Noun', 'School & Places', 'A quiet room in school filled with shelves of books to read and borrow.', 'thư viện', 'We read interesting stories in the library.', 'Đặt ngón tay lên môi làm động tác giữ im lặng: "Shh! Quiet in the library!"', 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80');
add('playground', '/ˈpleɪɡraʊnd/', 'Noun', 'School & Places', 'An outdoor area at school where pupils play games during break time.', 'sân chơi / sân trường', 'Students run and play in the playground at break time.', 'Làm động tác chạy nhảy vui nhộn ở sân trường.', 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&auto=format&fit=crop&q=80');
add('gym', '/dʒɪm/', 'Noun', 'School & Places', 'A large hall equipped for physical exercises and sports games.', 'phòng thể chất / nhà thể thao', 'We have our PE lesson in the gym.', 'Làm động tác nhảy bật hoặc ném bóng rổ.', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80');
add('computer room', '/kəmˈpjuːtə(r) ruːm/', 'Noun', 'School & Places', 'A specialized room equipped with desktop computers for IT lessons.', 'phòng tin học / máy tính', 'We practice typing in the computer room.', 'Làm động tác gõ bàn phím máy tính bằng hai tay.', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 5. CLASSROOM COMMANDS & ACTIONS (MỆNH LỆNH & ĐỘNG TỪ)
// -------------------------------------------------------------
add('stand up', '/stænd ʌp/', 'Phrase', 'Classroom Commands', 'To rise from a sitting position to one\'s feet.', 'đứng lên', 'Stand up, please! Good morning, teacher.', 'Đứng bật dậy ngay ngắn: "Stand up!"', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('sit down', '/sɪt daʊn/', 'Phrase', 'Classroom Commands', 'To lower one\'s body onto a chair or seat.', 'ngồi xuống', 'Sit down quietly at your desks.', 'Hạ người ngồi ngay ngắn xuống ghế: "Sit down!"', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('listen', '/ˈlɪsn/', 'Verb', 'Classroom Commands', 'To give attention with your ears to sounds and speech.', 'lắng nghe', 'Listen carefully to the audio recording.', 'Khum bàn tay đặt sau vành tai: "Listen!"', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('look', '/lʊk/', 'Verb', 'Classroom Commands', 'To direct one\'s eyes toward something to see it clearly.', 'nhìn / quan sát', 'Look at the colorful picture on the board.', 'Đưa hai ngón tay chỉ từ mắt mình hướng về phía bảng.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('open', '/ˈəʊpən/', 'Verb', 'Classroom Commands', 'To move something so that it is no longer closed.', 'mở ra', 'Open your book to page twenty, please.', 'Chắp hai tay rồi mở rộng hai bàn tay ra: "Open your book!"', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80');
add('close', '/kləʊz/', 'Verb', 'Classroom Commands', 'To move parts together so that an opening is covered.', 'đóng lại / gấp lại', 'Close your books and listen to me.', 'Khép hai bàn tay đang mở lại với nhau: "Close your book!"', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80');
add('come in', '/kʌm ɪn/', 'Phrase', 'Classroom Commands', 'To enter a room after asking permission.', 'đi vào lớp', 'May I come in, teacher? - Yes, you can.', 'Vẫy tay mời vào lớp: "Come in!"', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('go out', '/ɡəʊ aʊt/', 'Phrase', 'Classroom Commands', 'To leave a room for a short time.', 'đi ra ngoài', 'May I go out, please? - Yes, you can.', 'Chỉ tay hướng ra phía cửa lớp.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('speak', '/spiːk/', 'Verb', 'Classroom Commands', 'To say words and talk aloud with your voice.', 'nói / phát biểu', 'Speak English in class, please.', 'Đưa tay lên gần miệng và làm động tác mở ngón tay nói chuyện.', 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80');
add('ask', '/ɑːsk/', 'Verb', 'Classroom Commands', 'To say a question in order to get information.', 'hỏi / đặt câu hỏi', 'May I ask a question? - Yes, you may.', 'Giơ cao một cánh tay xin phát biểu trong lớp.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80');
add('read', '/riːd/', 'Verb', 'Classroom Commands', 'To look at written words and understand their meaning.', 'đọc sách', 'I like to read funny comic books.', 'Mở hai bàn tay như trang sách và đưa mắt nhìn chăm chú.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80');
add('write', '/raɪt/', 'Verb', 'Classroom Commands', 'To produce words or letters on paper with a pen or pencil.', 'viết chữ', 'Write your full name on the paper.', 'Cầm bút tưởng tượng và viết nắn nót trên không khí.', 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80');
add('draw', '/drɔː/', 'Verb', 'School & Actions', 'To create a picture by making lines on paper with a pencil.', 'vẽ tranh', 'I can draw a cute cat.', 'Cầm bút vẽ những đường nét uốn lượn trong không khí.', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80');
add('sing', '/sɪŋ/', 'Verb', 'School & Actions', 'To make musical sounds with your singing voice.', 'ca hát', 'She can sing a lovely English song.', 'Cầm chiếc micrô tưởng tượng trước miệng và ngân nga hát.', 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&auto=format&fit=crop&q=80');
add('dance', '/dɑːns/', 'Verb', 'School & Actions', 'To move your body rhythmically to the sound of music.', 'nhảy múa / khiêu vũ', 'They dance happily at the party.', 'Đung đưa hai tay và bước nhảy nhịp nhàng theo nhạc.', 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80');
add('swim', '/swɪm/', 'Verb', 'Sports & Actions', 'To move through water by moving your arms and legs.', 'bơi lội', 'I can swim very fast in the cool pool.', 'Quạt hai cánh tay về phía trước như đang bơi ếch: "Swim!"', 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&auto=format&fit=crop&q=80');
add('cook', '/kʊk/', 'Verb', 'Actions & Home', 'To prepare hot meals by heating food ingredients.', 'nấu ăn / làm bếp', 'My father can cook delicious noodle soup.', 'Một tay cầm chảo tưởng tượng, một tay đảo thìa xào nấu.', 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80');
add('run', '/rʌn/', 'Verb', 'Sports & Actions', 'To move your legs very fast on the ground.', 'chạy bộ', 'The boys run fast in the school yard.', 'Đánh hai tay và chạy nhấc chân tại chỗ: "Run fast!"', 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&auto=format&fit=crop&q=80');
add('skip', '/skɪp/', 'Verb', 'Sports & Actions', 'To jump over a turning rope repeatedly for fun and exercise.', 'nhảy dây', 'Girls like to skip rope at break time.', 'Hai tay quay dây tưởng tượng và nhún chân nhảy: "Skip!"', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80');
add('skate', '/skeɪt/', 'Verb', 'Sports & Actions', 'To glide smoothly over ground wearing shoes with small wheels.', 'trượt patin', 'He likes to skate in the park on Sundays.', 'Nghiêng người lướt hai chân nhịp nhàng như đang trượt patin.', 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80');
add('cycling', '/ˈsaɪklɪŋ/', 'Noun', 'Sports & Actions', 'The sport or activity of riding a bicycle.', 'đạp xe đạp', 'I go cycling in the park with my brother.', 'Nắm hai tay lái xe đạp và xoay chân đạp vòng tròn.', 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80');
add('flying a kite', '/ˈflaɪɪŋ ə kaɪt/', 'Phrase', 'Games & Hobbies', 'Holding a string while a light paper toy soars high in the sky.', 'thả diều', 'We are flying a kite in the windy field.', 'Một tay giữ cuộn dây, một tay giật dây hướng lên trời.', 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 6. FOOD & DRINKS (THỨC ĂN & ĐỒ UỐNG)
// -------------------------------------------------------------
add('rice', '/raɪs/', 'Noun', 'Food & Drinks', 'Small white grains cooked soft and eaten as the staple daily meal in Vietnam.', 'cơm / hạt gạo', 'I have a warm bowl of rice with fish.', 'Hai tay bưng bát cơm tưởng tượng và và cơm bằng đũa.', 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&auto=format&fit=crop&q=80');
add('fish', '/fɪʃ/', 'Noun', 'Food & Drinks', 'A creature living in water, cooked as a nutritious and tasty meal.', 'con cá / món cá', 'Would you like some grilled fish? - Yes, please.', 'Hai bàn tay úp vào nhau uốn lượn như cá bơi.', 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=600&auto=format&fit=crop&q=80');
add('meat', '/miːt/', 'Noun', 'Food & Drinks', 'The flesh of animals used as nourishing food, such as beef or pork.', 'món thịt', 'I like eating meat and green vegetables.', 'Làm động tác dùng dao nĩa cắt miếng thịt.', 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80');
add('bread', '/bred/', 'Noun', 'Food & Drinks', 'A baked food made of flour and water, crispy outside and soft inside.', 'bánh mì', 'I have crispy bread with eggs for breakfast.', 'Hai tay cầm ổ bánh mì cắn một miếng giòn rụm.', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80');
add('eggs', '/eɡz/', 'Noun', 'Food & Drinks', 'Oval food with shells laid by hens, delicious when fried or boiled.', 'những quả trứng', 'Would you like some fried eggs? - Yes, please.', 'Làm động tác đập vỏ trứng và cho vào chảo rán xèo xèo.', 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&auto=format&fit=crop&q=80');
add('egg', '/eɡ/', 'Noun', 'Food & Drinks', 'An oval food with a hard shell laid by birds, rich in protein.', 'quả trứng', 'I eat a boiled egg every morning.', 'Tạo hình quả trứng bằng hai bàn tay khum lại.', 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&auto=format&fit=crop&q=80');
add('chicken', '/ˈtʃɪkɪn/', 'Noun', 'Food & Drinks', 'Delicious cooked poultry meat that children love.', 'thịt gà / món gà', 'We have fried chicken for dinner tonight.', 'Hai tay làm động tác vỗ cánh gà và khen ngon.', 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&auto=format&fit=crop&q=80');
add('milk', '/mɪlk/', 'Noun', 'Food & Drinks', 'A white nutritious liquid from cows that helps children grow strong bones.', 'sữa tươi', 'Drink a fresh glass of milk every day.', 'Cầm cốc sữa tưởng tượng uống một hơi sảng khoái.', 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80');
add('water', '/ˈwɔːtə(r)/', 'Noun', 'Food & Drinks', 'Clear, refreshing liquid essential for all living creatures.', 'nước uống', 'Drink plenty of water when it is hot.', 'Nâng ly nước lên uống và xoa bụng hài lòng.', 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=600&auto=format&fit=crop&q=80');
add('juice', '/dʒuːs/', 'Noun', 'Food & Drinks', 'The refreshing liquid squeezed from fresh fruits.', 'nước ép trái cây', 'Would you like some orange juice? - Yes, please.', 'Cầm ống hút tưởng tượng hút nước ép hoa quả.', 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80');
add('apple', '/ˈæpl/', 'Noun', 'Food & Drinks', 'A round sweet fruit with crisp red or green skin.', 'quả táo', 'An apple a day keeps the doctor away.', 'Hai tay cầm quả táo cắn một miếng giòn: "Crunch!"', 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=80');
add('banana', '/bəˈnɑːnə/', 'Noun', 'Food & Drinks', 'A long curved yellow fruit that is sweet, soft, and easy to peel.', 'quả chuối', 'Monkeys love eating yellow bananas.', 'Làm động tác lột vỏ chuối từng góc một.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80');
add('orange', '/ˈɒrɪndʒ/', 'Noun', 'Food & Drinks', 'A round citrus fruit with thick orange skin and sweet juicy slices.', 'quả cam / màu cam', 'I love drinking sweet orange juice in summer.', 'Làm động tác vắt nước cam vào cốc.', 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 7. ANIMALS & PETS (ĐỘNG VẬT & THÚ CƯNG)
// -------------------------------------------------------------
add('dog', '/dɒɡ/', 'Noun', 'Animals & Pets', 'A loyal four-legged pet with a wagging tail that barks cheerfully.', 'con chó', 'My pet dog loves running in the garden.', 'Đưa hai bàn tay gập nhẹ trước ngực làm tai cún vẫy vẫy.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80');
add('cat', '/kæt/', 'Noun', 'Animals & Pets', 'A cute furry pet with whiskers that likes fish and purrs softly.', 'con mèo', 'My white cat sleeps quietly on the sofa.', 'Dùng ngón tay vuốt ria mép sang hai bên: "Meow meow!"', 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80');
add('bird', '/bɜːd/', 'Noun', 'Animals & Pets', 'A feathered creature with two wings that can fly high in the air.', 'con chim', 'Look at the blue bird singing in the tree.', 'Dang hai cánh tay vỗ nhẹ như chim đang bay lượn.', 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&auto=format&fit=crop&q=80');
add('rabbit', '/ˈræbɪt/', 'Noun', 'Animals & Pets', 'A cute furry pet with long upright ears and a fluffy tail that hops fast.', 'con thỏ', 'Do you have any pets? - Yes, I have a rabbit.', 'Đặt hai ngón tay lên đầu làm tai thỏ vẫy vẫy và nhảy lò cò.', 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&auto=format&fit=crop&q=80');
add('pet', '/pet/', 'Noun', 'Animals & Pets', 'A domestic animal kept for companionship and treated with affection.', 'thú cưng', 'I have two lovely pets at home.', 'Làm động tác vuốt ve âu yếm một chú cún hoặc mèo.', 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80');
add('monkey', '/ˈmʌŋki/', 'Noun', 'Animals & Pets', 'A clever, playful wild animal with a long tail that climbs trees quickly.', 'con khỉ', 'The playful monkey is eating a ripe banana.', 'Gãi đầu và nách, nhảy nhót như một chú khỉ tinh nghịch.', 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&auto=format&fit=crop&q=80');
add('elephant', '/ˈelɪfənt/', 'Noun', 'Animals & Pets', 'A gigantic gray wild animal with huge ears and a long flexible trunk.', 'con voi', 'Look at that huge elephant at the zoo!', 'Đưa một cánh tay dài trước mũi uốn lượn như vòi voi.', 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&auto=format&fit=crop&q=80');
add('tiger', '/ˈtaɪɡə(r)/', 'Noun', 'Animals & Pets', 'A powerful wild orange cat with black stripes and sharp claws.', 'con hổ / con cọp', 'I can see a big fierce tiger at the zoo.', 'Giơ hai bàn tay xòe móng vuốt gầm oai vệ: "Roar!"', 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&auto=format&fit=crop&q=80');
add('bear', '/beə(r)/', 'Noun', 'Animals & Pets', 'A large wild furry mammal with sharp claws that loves fish and honey.', 'con gấu', 'The brown bear is sleeping under a shady tree.', 'Đi lạch bạch bước chân to và gầm nhẹ như chú gấu.', 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&auto=format&fit=crop&q=80');
add('lion', '/ˈlaɪən/', 'Noun', 'Animals & Pets', 'A magnificent large wild cat with a golden mane, called king of beasts.', 'con sư tử', 'The lion is resting under the hot African sun.', 'Xòe bàn tay quanh mặt tạo bờm sư tử dũng mãnh.', 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop&q=80');
add('zebra', '/ˈzebrə/', 'Noun', 'Animals & Pets', 'An African wild horse with striking black and white striped fur.', 'con ngựa vằn', 'The zebra is galloping across the green savanna.', 'Dùng ngón tay vẽ các đường sọc ngang trên áo.', 'https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=600&auto=format&fit=crop&q=80');
add('zoo', '/zuː/', 'Noun', 'Animals & Places', 'A large park where wild animals are cared for and visited by families.', 'sở thú / vườn bách thú', 'We see tigers and monkeys at the city zoo.', 'Khoanh hai tay ngắm nhìn các chuồng thú xung quanh.', 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 8. TOYS & GAMES (ĐỒ CHƠI & TRÒ CHƠI)
// -------------------------------------------------------------
add('doll', '/dɒl/', 'Noun', 'Toys & Games', 'A child\'s toy designed to look like a baby or pretty girl.', 'búp bê', 'My sister has a pretty doll with yellow hair.', 'Hai tay ôm ấp búp bê nhỏ mỉm cười dịu dàng.', 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80');
add('car', '/kɑː(r)/', 'Noun', 'Toys & Transport', 'A motor vehicle with four wheels that drives along roads.', 'xe ô tô / xe đồ chơi', 'How many toy cars do you have? - I have five.', 'Hai tay cầm vô lăng lái ô tô: "Beep beep!"', 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80');
add('robot', '/ˈrəʊbɒt/', 'Noun', 'Toys & Games', 'A mechanical machine or cool toy made of metal and circuits.', 'người máy rô-bốt', 'I have a cool robot that can walk and light up.', 'Hai tay đưa vuông góc, bước đi cứng nhắc kiểu người máy.', 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80');
add('plane', '/pleɪn/', 'Noun', 'Toys & Transport', 'A flying vehicle with wide wings that travels high through clouds.', 'máy bay / máy bay đồ chơi', 'Look at the white plane flying high in the sky.', 'Dang hai cánh tay sang ngang và nghiêng người lượn sóng.', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=80');
add('kite', '/kaɪt/', 'Noun', 'Toys & Games', 'A light toy with paper stretched over sticks that flies in the wind.', 'con diều', 'I fly my colorful kite on windy afternoons.', 'Nhìn lên cao và giật dây diều nhịp nhàng.', 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop&q=80');
add('ball', '/bɔːl/', 'Noun', 'Toys & Sports', 'A round object that is kicked, thrown, or bounced in games.', 'quả bóng', 'Pass the ball to Nam, please.', 'Làm động tác ném hoặc sút bóng về phía trước.', 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600&auto=format&fit=crop&q=80');
add('yo-yo', '/ˈjəʊ jəʊ/', 'Noun', 'Toys & Games', 'A toy consisting of a spool pulled up and down on an attached string.', 'con quay yo-yo', 'Can you play with this yellow yo-yo?', 'Đưa ngón tay thả và kéo con quay yo-yo lên xuống.', 'https://images.unsplash.com/photo-1572061486082-9a3d463b2a0f?w=600&auto=format&fit=crop&q=80');
add('toys', '/tɔɪz/', 'Noun', 'Toys & Games', 'Objects made for children to play with and enjoy.', 'đồ chơi', 'I keep my toys neatly in a big box.', 'Xòe hai tay chỉ vào bộ sưu tập đồ chơi trên bàn.', 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&auto=format&fit=crop&q=80');
add('teddy bear', '/ˈtedi beə(r)/', 'Noun', 'Toys & Games', 'A soft, fluffy stuffed bear toy that children cuddle at bedtime.', 'gấu bông', 'She hugs her brown teddy bear to sleep.', 'Hai tay ôm chặt chú gấu bông vào lòng êm ái.', 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 9. ROOMS & FURNITURE (NHÀ CỬA & ĐỒ ĐẠC)
// -------------------------------------------------------------
add('house', '/haʊs/', 'Noun', 'House & Places', 'A building for human habitation, especially one that is lived in by a family.', 'ngôi nhà', 'This is my house. It has a green garden.', 'Chắp hai lòng bàn tay hình tam giác tạo mái nhà trên đầu.', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=80');
add('living room', '/ˈlɪvɪŋ ruːm/', 'Noun', 'House & Places', 'A comfortable room in a house where the family gathers together to chat.', 'phòng khách', 'Where is your father? - He is in the living room.', 'Hai tay mở rộng giới thiệu phòng khách ấm cúng.', 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80');
add('bedroom', '/ˈbedruːm/', 'Noun', 'House & Places', 'A quiet room in a house with a bed used primarily for sleeping.', 'phòng ngủ', 'My bedroom is clean and cozy.', 'Áp hai lòng bàn tay nghiêng đầu nhắm mắt ngủ bình yên.', 'https://images.unsplash.com/photo-1540518614846-7ede433c4550?w=600&auto=format&fit=crop&q=80');
add('kitchen', '/ˈkɪtʃɪn/', 'Noun', 'House & Places', 'A room in a house where food is stored, cooked, and prepared.', 'nhà bếp / phòng bếp', 'Mother is cooking dinner in the kitchen.', 'Làm động tác xào nấu thức ăn thơm phức.', 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80');
add('bathroom', '/ˈbɑːθruːm/', 'Noun', 'House & Places', 'A room equipped with a shower, bathtub, and sink for personal hygiene.', 'phòng tắm / nhà vệ sinh', 'Wash your hands thoroughly in the bathroom.', 'Hai tay xoa xà phòng rửa tay sạch sẽ.', 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80');
add('bed', '/bed/', 'Noun', 'House & Furniture', 'A piece of furniture with a mattress where you lie down to rest and sleep.', 'chiếc giường ngủ', 'The bed is in the bedroom.', 'Nằm ngả lưng êm ái trên giường.', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80');
add('wardrobe', '/ˈwɔːdrəʊb/', 'Noun', 'House & Furniture', 'A tall upright wooden cabinet or closet where clothes are hung neatly.', 'tủ quần áo', 'Hang your jacket inside the wardrobe.', 'Làm động tác mở hai cánh cửa tủ và treo móc áo.', 'https://images.unsplash.com/photo-1558997519-83ea9252def8?w=600&auto=format&fit=crop&q=80');
add('door', '/dɔː(r)/', 'Noun', 'House & Furniture', 'A hinged barrier used to open and close the entrance to a room.', 'cánh cửa ra vào', 'Please close the door quietly.', 'Làm động tác nắm quả đấm cửa mở ra và đóng lại.', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80');
add('window', '/ˈwɪndəʊ/', 'Noun', 'House & Furniture', 'An opening in a wall fitted with glass to admit light and fresh breeze.', 'cửa sổ', 'Open the window to let fresh air in.', 'Đẩy hai cánh cửa sổ đón gió mát.', 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600&auto=format&fit=crop&q=80');
add('lamp', '/læmp/', 'Noun', 'House & Furniture', 'An electric lighting device that gives warm light on a study desk.', 'đèn bàn / đèn học', 'Turn on the desk lamp to read your book.', 'Làm động tác bấm công tắc bật đèn bàn sáng bừng.', 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 10. DAYS OF WEEK & MONTHS (THỜI GIAN & LỊCH TRÌNH)
// -------------------------------------------------------------
add('Monday', '/ˈmʌndeɪ/', 'Noun', 'Days & Time', 'The first school day of the week, right after Sunday.', 'thứ Hai', 'What day is it today? - It is Monday.', 'Giơ 1 ngón tay biểu thị ngày đầu tuần đi học.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Tuesday', '/ˈtjuːzdeɪ/', 'Noun', 'Days & Time', 'The second school day of the week, following Monday.', 'thứ Ba', 'I have English on Tuesday and Friday.', 'Giơ 2 ngón tay biểu thị ngày thứ hai trong tuần.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Wednesday', '/ˈwenzdeɪ/', 'Noun', 'Days & Time', 'The middle day of the school week, between Tuesday and Thursday.', 'thứ Tư', 'We have Science lessons on Wednesday.', 'Giơ 3 ngón tay chỉ ngày giữa tuần.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Thursday', '/ˈθɜːzdeɪ/', 'Noun', 'Days & Time', 'The fourth weekday of the week, right before Friday.', 'thứ Năm', 'What do you do on Thursday? - I play football.', 'Giơ 4 ngón tay biểu thị thứ Năm.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Friday', '/ˈfraɪdeɪ/', 'Noun', 'Days & Time', 'The final school day of the week before the weekend starts.', 'thứ Sáu', 'Friday is our favourite school day.', 'Xòe 5 ngón tay reo hò đón ngày cuối tuần vui vẻ.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Saturday', '/ˈsætədeɪ/', 'Noun', 'Days & Time', 'The first day of the weekend when children can play and relax.', 'thứ Bảy', 'I go cycling with my family on Saturday.', 'Dang hai tay thư giãn tận hưởng ngày nghỉ.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('Sunday', '/ˈsʌndeɪ/', 'Noun', 'Days & Time', 'The restful weekend day when we spend time with our family.', 'Chủ nhật', 'We visit our grandparents on Sunday.', 'Cười tươi khoanh tay trước ngực đón ngày Chủ nhật ấm cúng.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('weekend', '/ˌwiːkˈend/', 'Noun', 'Days & Time', 'Saturday and Sunday together, when there are no school classes.', 'ngày cuối tuần', 'Have a wonderful weekend, teacher!', 'Hai tay ôm đầu thư giãn đón ngày nghỉ.', 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80');
add('January', '/ˈdʒænjuəri/', 'Noun', 'Months of Year', 'The first month of the calendar year when New Year is celebrated.', 'tháng Một / tháng Giêng', 'When is your birthday? - It is in January.', 'Chỉ vào trang đầu tiên của cuốn lịch năm mới.', 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop&q=80');
add('May', '/meɪ/', 'Noun', 'Months of Year', 'The warm fifth month of the calendar year near the start of summer.', 'tháng Năm', 'My birthday is in May.', 'Chỉ vào số 5 trên tờ lịch.', 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop&q=80');
add('November', '/nəʊˈvembə(r)/', 'Noun', 'Months of Year', 'The eleventh month when students celebrate Teachers\' Day in Vietnam.', 'tháng Mười một', 'Teachers\' Day is on November twentieth.', 'Làm động tác tặng hoa tri ân thầy cô.', 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 11. SCHOOL SUBJECTS (MÔN HỌC)
// -------------------------------------------------------------
add('Maths', '/mæθs/', 'Noun', 'School Subjects', 'The school subject where you calculate sums, count, and explore shapes.', 'môn Toán', 'I have Maths every school day.', 'Giơ các ngón tay đếm 1, 2, 3 và làm phép cộng.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('English', '/ˈɪŋɡlɪʃ/', 'Noun', 'School Subjects', 'The international language taught in school to communicate with the world.', 'môn Tiếng Anh', 'English is my favourite subject.', 'Nói câu "Hello! How are you?" tự tin.', 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80');
add('Science', '/ˈsaɪəns/', 'Noun', 'School Subjects', 'The subject where students study plants, animals, magnets, and nature.', 'môn Khoa học', 'We do exciting experiments in Science class.', 'Cầm ống nghiệm tưởng tượng quan sát hiện tượng khoa học.', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80');
add('Music', '/ˈmjuːzɪk/', 'Noun', 'School Subjects', 'The art of combining vocal or instrumental sounds for harmonious melody.', 'môn Âm nhạc', 'We sing songs happily in Music class.', 'Vẫy tay chỉ huy dàn nhạc và ngân nga giai điệu.', 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80');
add('Art', '/ɑːt/', 'Noun', 'School Subjects', 'The subject of drawing pictures, painting colors, and creative craftwork.', 'môn Mỹ thuật', 'I draw a colorful rainbow in Art class.', 'Cầm cọ vẽ pha màu và quét lên khung vẽ tưởng tượng.', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80');
add('PE', '/ˌpiː ˈiː/', 'Noun', 'School Subjects', 'Physical Education involving sports, exercise, and running games.', 'môn Thể dục', 'We play football during PE lesson.', 'Tập động tác thể dục vươn thở: 1 - 2 - 3 - 4!', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80');
add('IT', '/ˌaɪ ˈtiː/', 'Noun', 'School Subjects', 'Information Technology lessons teaching computer skills and typing.', 'môn Tin học', 'We learn how to use computers in IT class.', 'Hai tay gõ bàn phím nhịp nhàng trên mặt bàn.', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80');
add('Vietnamese', '/ˌvjetnəˈmiːz/', 'Noun', 'School Subjects', 'Our native national language subject with reading, spelling, and poems.', 'môn Tiếng Việt', 'We read beautiful poems in Vietnamese class.', 'Mở trang sách Tiếng Việt và đọc diễn cảm.', 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 12. JOBS & OCCUPATIONS (NGHỀ NGHIỆP)
// -------------------------------------------------------------
add('teacher', '/ˈtiːtʃə(r)/', 'Noun', 'Jobs', 'A dedicated professional whose job is guiding and educating students in school.', 'thầy cô giáo', 'Our teacher is very gentle and helpful.', 'Cầm phấn viết lên bảng và hướng dẫn các em học sinh.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80');
add('doctor', '/ˈdɒktə(r)/', 'Noun', 'Jobs', 'A qualified person trained to treat sick patients and cure illnesses.', 'bác sĩ', 'The doctor helped my grandmother feel better.', 'Đeo ống nghe khám bệnh cho bệnh nhân.', 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80');
add('nurse', '/nɜːs/', 'Noun', 'Jobs', 'A healthcare professional who assists doctors and cares for sick people.', 'y tá / điều dưỡng', 'The kind nurse gave me medicine.', 'Đo nhiệt độ và chăm sóc bệnh nhân ân cần.', 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80');
add('driver', '/ˈdraɪvə(r)/', 'Noun', 'Jobs', 'A person who operates a motor vehicle such as a bus, car, or taxi.', 'tài xế / người lái xe', 'My uncle is a careful school bus driver.', 'Hai tay cầm vô lăng lái xe an toàn trên đường.', 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&auto=format&fit=crop&q=80');
add('worker', '/ˈwɜːkə(r)/', 'Noun', 'Jobs', 'A hardworking person employed in a factory building useful goods.', 'công nhân', 'My father is a worker in a modern factory.', 'Đội mũ bảo hộ và vận hành máy móc khéo léo.', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80');
add('farmer', '/ˈfɑːmə(r)/', 'Noun', 'Jobs', 'A person who cultivates land, grows crops, and raises farm animals.', 'người nông dân', 'The farmer harvests ripe golden rice.', 'Làm động tác gặt lúa hoặc chăm sóc đàn gia súc.', 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80');
add('pilot', '/ˈpaɪlət/', 'Noun', 'Jobs', 'A skilled person licensed to navigate and fly airplanes through skies.', 'phi công', 'I want to be a pilot to fly airplanes.', 'Đội mũ phi công và điều khiển cần lái máy bay vút lên bầu trời.', 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f9?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 13. COLORS (MÀU SẮC)
// -------------------------------------------------------------
add('red', '/red/', 'Noun', 'Colors', 'The bold, warm color of ripe strawberries and fresh roses.', 'màu đỏ', 'What color is it? - It is bright red.', 'Chỉ vào đồ vật màu đỏ trong lớp học.', 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=600&auto=format&fit=crop&q=80');
add('blue', '/bluː/', 'Noun', 'Colors', 'The serene color of a clear sunny sky and deep ocean waters.', 'màu xanh da trời / xanh lam', 'My school bag is deep blue.', 'Chỉ vào bầu trời trong xanh bên ngoài cửa sổ.', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80');
add('yellow', '/ˈjeləʊ/', 'Noun', 'Colors', 'The radiant, cheerful color of ripe bananas and warm sunshine.', 'màu vàng', 'I have a yellow pencil on the desk.', 'Chỉ vào ánh nắng ban mai ấm áp.', 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=80');
add('green', '/ɡriːn/', 'Noun', 'Colors', 'The vibrant, fresh color of growing grass and tree leaves.', 'màu xanh lá cây', 'Look at the fresh green trees in the park.', 'Chỉ vào tán cây xanh mát ngoài sân trường.', 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=80');
add('orange', '/ˈɒrɪndʒ/', 'Noun', 'Colors', 'The lively color between red and yellow, like ripe carrots.', 'màu cam', 'She wears a pretty orange dress.', 'Chỉ vào quả cam hoặc đồ vật màu cam.', 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&auto=format&fit=crop&q=80');
add('white', '/waɪt/', 'Noun', 'Colors', 'The clean, pure color of fresh milk, clouds, and snow.', 'màu trắng', 'The white rabbit has pink eyes.', 'Chỉ vào tờ giấy trắng tinh.', 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&auto=format&fit=crop&q=80');
add('black', '/blæk/', 'Noun', 'Colors', 'The deep, dark color of night and graphite lead.', 'màu đen', 'My brother has short black hair.', 'Chỉ vào mái tóc đen óng ả.', 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80');
add('color', '/ˈkʌlə(r)/', 'Noun', 'Colors', 'The visual property of things like red, blue, green, and yellow.', 'màu sắc', 'What color is your pencil case? - It is pink.', 'Chỉ vào hộp sáp màu rực rỡ.', 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 14. NUMBERS (CON SỐ)
// -------------------------------------------------------------
add('one', '/wʌn/', 'Number', 'Numbers & Time', 'The single number representing the quantity 1.', 'số 1', 'I have one blue ruler.', 'Giơ một ngón tay trỏ thẳng đứng.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('two', '/tuː/', 'Number', 'Numbers & Time', 'The number following one, equal to 1 + 1.', 'số 2', 'I have two eyes and two ears.', 'Giơ hai ngón tay hình chữ V (Peace sign).', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('three', '/θriː/', 'Number', 'Numbers & Time', 'The number following two, equal to 2 + 1.', 'số 3', 'There are three pens on the desk.', 'Giơ ba ngón tay phát âm /θ/ chuẩn xác.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('four', '/fɔː(r)/', 'Number', 'Numbers & Time', 'The number representing 3 + 1.', 'số 4', 'A chair has four legs.', 'Giơ bốn ngón tay ngay ngắn.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('five', '/faɪv/', 'Number', 'Numbers & Time', 'The number of fingers on one human hand.', 'số 5', 'Give me five! Good job, friend.', 'Xòe trọn năm ngón tay chào đón (High five!).', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('six', '/sɪks/', 'Number', 'Numbers & Time', 'The number following five (5 + 1).', 'số 6', 'She has six colorful pencils.', 'Giơ một bàn tay 5 ngón cộng thêm 1 ngón tay bên kia.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('seven', '/ˈsevn/', 'Number', 'Numbers & Time', 'The number of days in one complete week.', 'số 7', 'There are seven days in a week.', 'Giơ 7 ngón tay biểu thị.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('eight', '/eɪt/', 'Number', 'Numbers & Time', 'The number equal to twice four (4 x 2).', 'số 8', 'I am eight years old.', 'Giơ 8 ngón tay tự hào về số tuổi lớp 3.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('nine', '/naɪn/', 'Number', 'Numbers & Time', 'The single-digit number right before ten (10 - 1).', 'số 9', 'He is nine years old.', 'Giơ 9 ngón tay.', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');
add('ten', '/ten/', 'Number', 'Numbers & Time', 'The number equal to all fingers on both hands combined.', 'số 10', 'I score ten points in the English quiz!', 'Xòe rộng cả 10 ngón tay của hai bàn tay reo mừng: "Ten!"', 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80');

// -------------------------------------------------------------
// 15. WEATHER & SEASONS (THỜI TIẾT & MÙA)
// -------------------------------------------------------------
add('sunny', '/ˈsʌni/', 'Adjective', 'Weather', 'Full of warm, bright light shining from the sun in a clear sky.', 'trời nắng / có nắng', 'It is sunny and warm today. Let\'s go out!', 'Hai tay vòng thành hình mặt trời trên đầu tỏa sáng.', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80');
add('rainy', '/ˈreɪni/', 'Adjective', 'Weather', 'Having plenty of falling water drops from clouds outside.', 'trời mưa / có mưa', 'Take an umbrella on rainy days.', 'Dùng các đầu ngón tay gõ nhịp xuống bàn như mưa rơi rào rào.', 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=80');
add('windy', '/ˈwɪndi/', 'Adjective', 'Weather', 'With strong currents of blowing air that make leaves dance.', 'có gió / lộng gió', 'It is windy, perfect for flying kites.', 'Đung đưa hai cánh tay uốn lượn như gió thổi ào ào.', 'https://images.unsplash.com/photo-1505672678857-8f9370d52852?w=600&auto=format&fit=crop&q=80');
add('cloudy', '/ˈklaʊdi/', 'Adjective', 'Weather', 'Covered with soft gray and white masses in the sky.', 'nhiều mây', 'It is cloudy today, not too hot.', 'Dùng hai tay vẽ những đám mây bồng bềnh.', 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=80');

// Generate TypeScript Output
let fileContent = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Comprehensive Primary English Vocabulary Knowledge Base
 * Tailored for Global Success Primary Curriculum (Grades 1 to 5)
 */

export interface VocabKnowledgeEntry {
  word: string;
  ipa: string;
  type: string;
  category: string;
  explanation: string;
  vn: string;
  sentence: string;
  tpr: string;
  img: string;
}

export const COMPREHENSIVE_VOCAB_DB: Record<string, VocabKnowledgeEntry> = {
`;

for (const it of items) {
  const key = it.word.toLowerCase();
  fileContent += `  ${JSON.stringify(key)}: ${JSON.stringify(it, null, 4)},\n`;
}

fileContent += `};

/**
 * Normalizes query string for robust lookup
 */
function cleanQuery(rawWord: string): string {
  if (!rawWord || typeof rawWord !== 'string') return '';
  return rawWord.toLowerCase().trim().replace(/^[.,?!:;'"()]+|[.,?!:;'"()]+$/g, '').trim();
}

/**
 * Intelligent Multi-strategy Dictionary Lookup
 */
export function findVocabEntry(rawWord: string): VocabKnowledgeEntry | null {
  const q = cleanQuery(rawWord);
  if (!q) return null;

  // 1. Exact match in knowledge base
  if (COMPREHENSIVE_VOCAB_DB[q]) {
    return COMPREHENSIVE_VOCAB_DB[q];
  }

  // 2. Singular check (e.g. eyes -> eye, books -> book)
  if (q.endsWith('s') && COMPREHENSIVE_VOCAB_DB[q.slice(0, -1)]) {
    return COMPREHENSIVE_VOCAB_DB[q.slice(0, -1)];
  }
  if (q.endsWith('es') && COMPREHENSIVE_VOCAB_DB[q.slice(0, -2)]) {
    return COMPREHENSIVE_VOCAB_DB[q.slice(0, -2)];
  }

  // 3. Continuous verb check (e.g. playing -> play, swimming -> swim)
  if (q.endsWith('ing')) {
    const base = q.slice(0, -3);
    if (COMPREHENSIVE_VOCAB_DB[base]) return COMPREHENSIVE_VOCAB_DB[base];
    if (COMPREHENSIVE_VOCAB_DB[base + 'e']) return COMPREHENSIVE_VOCAB_DB[base + 'e'];
  }

  return null;
}

/**
 * High-quality pedagogical fallback when a rare word is not in the offline dictionary
 */
export function createPedagogicalFallback(
  rawWord: string, 
  grade: number = 3, 
  categoryFallback: string = 'General',
  unitContext: string = ''
): VocabKnowledgeEntry {
  const clean = cleanQuery(rawWord);
  const isVerb = clean.endsWith('ing') || ['jump', 'dance', 'walk', 'cook', 'play', 'sleep', 'write', 'draw', 'listen', 'look', 'touch'].includes(clean);
  const isAnimal = ['pet', 'cat', 'dog', 'pig', 'cow', 'horse', 'duck', 'chicken', 'fox', 'wolf'].includes(clean);
  const isFood = ['food', 'rice', 'cake', 'fruit', 'drink', 'soup', 'meat'].includes(clean);

  let explanation = "It is an important thing we learn and practice in our English lessons.";
  if (isVerb) {
    explanation = "An energetic action that we do with our body or mind.";
  } else if (isAnimal) {
    explanation = "A living creature that moves and lives in nature or with humans.";
  } else if (isFood) {
    explanation = "Something tasty and nutritious that we eat or drink to stay healthy.";
  }

  return {
    word: rawWord.trim(),
    ipa: \`/\${clean}/\`,
    type: isVerb ? 'Verb' : 'Noun',
    category: categoryFallback || (isVerb ? 'Actions' : 'Vocabulary'),
    explanation,
    vn: rawWord.trim(),
    sentence: isVerb ? \`I like to \${clean} with my classmates.\` : \`I can see a \${clean} in the picture.\`,
    tpr: \`Giáo viên hướng dẫn học sinh đọc phát âm chuẩn và làm cử chỉ tương ứng với '\${rawWord}'.\`,
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'
  };
}
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Successfully generated ${items.length} master entries into ${targetPath}`);
