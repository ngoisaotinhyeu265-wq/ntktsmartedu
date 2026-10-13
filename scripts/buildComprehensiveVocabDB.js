/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Builder for comprehensiveVocabKnowledgeBase.ts
 */

const fs = require('fs');
const path = require('path');

const entries = [
  // ==========================================
  // 1. CHARACTERS IN GLOBAL SUCCESS & GREETINGS
  // ==========================================
  {
    word: 'hello',
    ipa: '/həˈləʊ/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'A friendly word said when you meet a friend or teacher.',
    vn: 'xin chào',
    sentence: 'Hello, I am Mai. Nice to meet you!',
    tpr: 'Vẫy tay phải mỉm cười chào cả lớp: "Wave hand and say Hello!"',
    img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'hi',
    ipa: '/haɪ/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'A short, cheerful word used to greet a classmate or close friend.',
    vn: 'chào bạn',
    sentence: 'Hi, Nam! How are you today?',
    tpr: 'Giơ một tay lên ngang vai và mỉm cười thân thiện.',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'goodbye',
    ipa: '/ˌɡʊdˈbaɪ/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'Words said when parting from someone at the end of class.',
    vn: 'tạm biệt',
    sentence: 'Goodbye, teacher! See you tomorrow.',
    tpr: 'Vẫy tay nhẹ nhàng chào tạm biệt khi tan học.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'bye',
    ipa: '/baɪ/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'A quick, friendly word said when leaving your friends.',
    vn: 'tạm biệt / chào nhé',
    sentence: 'Bye, Lucy! Have a nice weekend.',
    tpr: 'Vẫy tay nhẹ và quay bước đi.',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Mai',
    ipa: '/maɪ/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A cheerful schoolgirl in Vietnam. She is a main student character in our English book.',
    vn: 'bạn Mai (nhân vật học sinh)',
    sentence: 'Hello, I am Mai. I am eight years old.',
    tpr: 'Chỉ vào tranh bạn Mai trong SGK Global Success.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Nam',
    ipa: '/næm/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'An energetic schoolboy in Vietnam. He loves sports and studies in Grade 3.',
    vn: 'bạn Nam (nhân vật học sinh)',
    sentence: 'This is Nam. He likes playing football.',
    tpr: 'Chỉ vào bạn Nam và làm động tác sút bóng thể thao.',
    img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Ben',
    ipa: '/ben/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A friendly boy from Britain. He learns and speaks English with Vietnamese friends.',
    vn: 'bạn Ben (bạn học người Anh)',
    sentence: 'Hi, I am Ben. I am from Britain.',
    tpr: 'Chỉ vào nhân vật bạn Ben trong sách.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Lucy',
    ipa: '/ˈluːsi/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A friendly, cheerful girl from Britain. She is a student character in our book.',
    vn: 'bạn Lucy (nhân vật học sinh)',
    sentence: 'This is Lucy. She is my new classmate.',
    tpr: 'Chỉ vào hình ảnh bạn Lucy trong SGK.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Mary',
    ipa: '/ˈmeəri/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A friendly girl from America. She loves reading books and playing with friends.',
    vn: 'bạn Mary (bạn học trong sách)',
    sentence: 'Is that Mary? - Yes, it is.',
    tpr: 'Chỉ vào nhân vật Mary.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Peter',
    ipa: '/ˈpiːtə(r)/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A friendly boy from Britain. He is good at playing chess and swimming.',
    vn: 'bạn Peter (bạn học trong sách)',
    sentence: 'My name is Peter. I like playing chess.',
    tpr: 'Chỉ vào nhân vật Peter.',
    img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Bill',
    ipa: '/bɪl/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A lively boy in our English lessons who enjoys drawing and outdoor games.',
    vn: 'bạn Bill (nhân vật bạn học)',
    sentence: 'This is Bill. He is my friend.',
    tpr: 'Chỉ vào hình ảnh bạn Bill.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Linh',
    ipa: '/lɪŋ/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'A kind Vietnamese primary pupil who enjoys singing and reading.',
    vn: 'bạn Linh (bạn học trong sách)',
    sentence: 'Her name is Linh. She has big eyes.',
    tpr: 'Chỉ vào bạn Linh trong tranh.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Mr Long',
    ipa: '/ˈmɪstə(r) lɒŋ/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'The kind and respected male English teacher at our primary school.',
    vn: 'thầy Long (thầy giáo)',
    sentence: 'Good morning, Mr Long! - Good morning, class.',
    tpr: 'Khoanh tay cúi đầu lễ phép chào thầy giáo.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'Miss Hien',
    ipa: '/mɪs hiən/',
    type: 'Proper Noun',
    category: 'Characters & People',
    explanation: 'The gentle and caring female teacher at our primary school.',
    vn: 'cô Hiền (cô giáo)',
    sentence: 'Goodbye, Miss Hien! - Goodbye, see you tomorrow.',
    tpr: 'Khoanh tay cúi đầu lễ phép chào cô giáo.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80'
  },

  // ==========================================
  // 2. PRONOUNS, INQUIRY & GRAMMAR WORDS
  // ==========================================
  {
    word: 'I',
    ipa: '/aɪ/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'Used by the speaker to talk about oneself.',
    vn: 'tôi / mình / em',
    sentence: 'I am a student at primary school.',
    tpr: 'Tự đặt bàn tay lên ngực mình để chỉ bản thân: "I".',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'am',
    ipa: '/æm/',
    type: 'Verb',
    category: 'Grammar & Words',
    explanation: 'Used with the pronoun for oneself to state who or how you are.',
    vn: 'thì / là (đi với I)',
    sentence: 'I am happy and healthy today.',
    tpr: 'Đặt tay lên ngực và gật đầu tự tin.',
    img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'is',
    ipa: '/ɪz/',
    type: 'Verb',
    category: 'Grammar & Words',
    explanation: 'Used with a singular person or object to say what or how it is.',
    vn: 'thì / là (số ít)',
    sentence: 'This is my new English book.',
    tpr: 'Chỉ tay vào một đồ vật hoặc một bạn bên cạnh.',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'are',
    ipa: '/ɑː(r)/',
    type: 'Verb',
    category: 'Grammar & Words',
    explanation: 'Used with "you", "we", or "they" to describe people or things.',
    vn: 'thì / là (số nhiều / đi với you)',
    sentence: 'We are good friends in class.',
    tpr: 'Xòe hai tay hướng về phía bạn bè.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'you',
    ipa: '/juː/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'The person or friend that the speaker is talking to.',
    vn: 'bạn / cậu / em',
    sentence: 'How are you today, my friend?',
    tpr: 'Chỉ tay lịch sự về phía người đối diện.',
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'he',
    ipa: '/hiː/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'Used to refer to a boy, man, or male person already mentioned.',
    vn: 'cậu ấy / anh ấy / ông ấy',
    sentence: 'He is my brother. He is ten.',
    tpr: 'Chỉ tay nhẹ về phía một bạn trai.',
    img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'she',
    ipa: '/ʃiː/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'Used to refer to a girl, woman, or female person already mentioned.',
    vn: 'cô ấy / bạn ấy / bà ấy',
    sentence: 'She is my sister. She has long hair.',
    tpr: 'Chỉ tay nhẹ về phía một bạn gái.',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'this',
    ipa: '/ðɪs/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'Used to point to a person or thing that is close to the speaker.',
    vn: 'đây / cái này (ở gần)',
    sentence: 'This is my pen on the desk.',
    tpr: 'Chỉ ngón tay trỏ vào một vật ở ngay trước mặt: "This".',
    img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'that',
    ipa: '/ðæt/',
    type: 'Pronoun',
    category: 'Grammar & Words',
    explanation: 'Used to point to a person or thing that is further away from you.',
    vn: 'kia / cái kia (ở xa)',
    sentence: 'That is our teacher over there.',
    tpr: 'Duỗi thẳng cánh tay chỉ vào một vật ở xa: "That".',
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'what',
    ipa: '/wɒt/',
    type: 'Pronoun',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask for specific information about things or someone\'s name.',
    vn: 'cái gì / gì',
    sentence: 'What is your name? - My name is Nam.',
    tpr: 'Ngửa hai lòng bàn tay, nhún vai thắc mắc: "What?"',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'how',
    ipa: '/haʊ/',
    type: 'Adverb',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask about someone\'s health, feelings, or how things are done.',
    vn: 'như thế nào / làm sao',
    sentence: 'How are you today? - I am fine, thank you.',
    tpr: 'Nghiêng đầu mỉm cười hỏi thăm bạn.',
    img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'where',
    ipa: '/weə(r)/',
    type: 'Adverb',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask about the place or location of someone or something.',
    vn: 'ở đâu',
    sentence: 'Where is the book? - It is on the table.',
    tpr: 'Đưa tay lên trán nhìn quanh tìm kiếm vị trí.',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'who',
    ipa: '/huː/',
    type: 'Pronoun',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask about the identity of a person.',
    vn: 'ai / là ai',
    sentence: 'Who is that? - That is my mother.',
    tpr: 'Chỉ tay về một người và làm động tác hỏi: "Who?"',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'when',
    ipa: '/wen/',
    type: 'Adverb',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask about the time or date an event happens.',
    vn: 'khi nào / vào lúc nào',
    sentence: 'When is your birthday? - It is in May.',
    tpr: 'Chỉ ngón tay vào đồng hồ đeo tay: "When?"',
    img: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'why',
    ipa: '/waɪ/',
    type: 'Adverb',
    category: 'Inquiry & Questions',
    explanation: 'Used to ask for the reason or purpose of something.',
    vn: 'tại sao / vì sao',
    sentence: 'Why do you like English? - Because it is fun.',
    tpr: 'Xòe hai tay, nghiêng đầu thắc mắc lý do.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'your',
    ipa: '/jɔː(r)/',
    type: 'Determiner',
    category: 'Grammar & Words',
    explanation: 'Belonging to or associated with the person being spoken to.',
    vn: 'của bạn / của em',
    sentence: 'Is this your pencil case?',
    tpr: 'Chỉ tay về phía cặp sách của bạn đối diện.',
    img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'my',
    ipa: '/maɪ/',
    type: 'Determiner',
    category: 'Grammar & Words',
    explanation: 'Belonging to or associated with the person who is speaking.',
    vn: 'của tôi / của mình',
    sentence: 'This is my English notebook.',
    tpr: 'Áp hai bàn tay vào ngực mình: "My".',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'fine',
    ipa: '/faɪn/',
    type: 'Adjective',
    category: 'Greetings & Phrases',
    explanation: 'Feeling healthy, well, and in good spirits.',
    vn: 'khỏe mạnh / tốt',
    sentence: 'I am fine, thank you. And you?',
    tpr: 'Giơ ngón tay cái biểu thị "Tuyệt vời, khỏe mạnh!" (Thumbs up).',
    img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'thank you',
    ipa: '/ˈθæŋk juː/',
    type: 'Phrase',
    category: 'Greetings & Phrases',
    explanation: 'Polite words spoken to show gratitude when someone helps you.',
    vn: 'cảm ơn bạn / em cảm ơn cô',
    sentence: 'Thank you very much, teacher!',
    tpr: 'Đặt bàn tay lên ngực và khẽ cúi đầu cảm ơn chân thành.',
    img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'thanks',
    ipa: '/θæŋks/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'A quick, warm way to say thank you to friends.',
    vn: 'cảm ơn nhé',
    sentence: 'Here is your pen. - Thanks!',
    tpr: 'Cười tươi và gật đầu cảm ơn bạn.',
    img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'yes',
    ipa: '/jes/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'Spoken to show agreement or give a positive answer.',
    vn: 'vâng / đúng vậy / có',
    sentence: 'Do you have a pet? - Yes, I do.',
    tpr: 'Gật đầu đồng ý dứt khoát: "Yes!".',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'no',
    ipa: '/nəʊ/',
    type: 'Interjection',
    category: 'Greetings & Phrases',
    explanation: 'Spoken to show disagreement or give a negative answer.',
    vn: 'không / không phải',
    sentence: 'Is this your bag? - No, it isn\'t.',
    tpr: 'Lắc đầu nhẹ và vẫy tay từ chối: "No".',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'name',
    ipa: '/neɪm/',
    type: 'Noun',
    category: 'School & Self',
    explanation: 'The word by which a specific person, place, or thing is known.',
    vn: 'tên gọi',
    sentence: 'What is your name? - My name is Nam.',
    tpr: 'Chỉ tay vào bảng tên đeo trước ngực.',
    img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'friend',
    ipa: '/frend/',
    type: 'Noun',
    category: 'School & Self',
    explanation: 'A person whom one knows, likes, trusts, and enjoys playing with.',
    vn: 'người bạn',
    sentence: 'Mai is my best friend in class.',
    tpr: 'Khoác vai bạn bên cạnh hoặc bắt tay thân thiện.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'classmate',
    ipa: '/ˈklɑːsmeɪt/',
    type: 'Noun',
    category: 'School & Self',
    explanation: 'A student who learns together with you in the same classroom.',
    vn: 'bạn cùng lớp',
    sentence: 'Peter is my new classmate.',
    tpr: 'Chỉ tay quanh phòng học vào các bạn học sinh.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80'
  },
  {
    word: 'spell',
    ipa: '/spel/',
    type: 'Verb',
    category: 'School & Actions',
    explanation: 'To write or say the letters of a word in correct order.',
    vn: 'đánh vần chữ cái',
    sentence: 'How do you spell your name? - M-A-I.',
    tpr: 'Dùng ngón tay trỏ viết từng chữ cái trong không khí.',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80'
  }
];

console.log('Script loaded with core base. Writing full dictionary...');
