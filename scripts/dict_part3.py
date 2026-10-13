# -*- coding: utf-8 -*-
"""
Part 3: Health, Adjectives, Daily Routines & Communicative Phrasal Actions
"""

PART3_ENTRIES = {
    # Health & Illnesses
    "headache": {
        "word": "headache",
        "ipa": "/ˈhedeɪk/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A continuous dull or throbbing pain felt inside your head.",
        "vn": "đau đầu / nhức đầu",
        "sentence": "I have a terrible headache. I should lie down and rest.",
        "tpr": "Hai tay ôm lấy hai bên thái dương nhăn trán đau nhức.",
        "img": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80"
    },
    "toothache": {
        "word": "toothache",
        "ipa": "/ˈtuːθeɪk/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A sharp, throbbing pain in or near a tooth.",
        "vn": "đau răng / nhức răng",
        "sentence": "He has a bad toothache. He should go to the dentist.",
        "tpr": "Áp một bàn tay lên một bên má nhăn mặt đau đớn.",
        "img": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80"
    },
    "stomach ache": {
        "word": "stomach ache",
        "ipa": "/ˈstʌmək eɪk/",
        "type": "Noun",
        "category": "Health",
        "explanation": "Pain in the tummy or abdominal area, often after eating bad food.",
        "vn": "đau bụng / đau dạ dày",
        "sentence": "She has a stomach ache because she ate too many sour plums.",
        "tpr": "Hai tay ôm chặt lấy bụng và hơi gập người lại kêu đau.",
        "img": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80"
    },
    "fever": {
        "word": "fever",
        "ipa": "/ˈfiːvə(r)/",
        "type": "Noun",
        "category": "Health",
        "explanation": "An abnormally high body temperature when one feels burning hot and sick.",
        "vn": "sốt cao",
        "sentence": "He has a high fever. His forehead feels very warm.",
        "tpr": "Đặt mu bàn tay lên trán kiểm tra nhiệt độ nóng ran.",
        "img": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80"
    },
    "cough": {
        "word": "cough",
        "ipa": "/kɒf/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A sudden forceful expulsion of air from the lungs with a sharp sound.",
        "vn": "cơn ho / tiếng ho",
        "sentence": "She has a dry cough. She drinks warm honey lemon water.",
        "tpr": "Khum bàn tay che trước miệng và ho nhẹ hai tiếng: 'Khẹc khẹc!'.",
        "img": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80"
    },
    "sore throat": {
        "word": "sore throat",
        "ipa": "/ˌsɔː ˈθrəʊt/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A painful inflammation of the throat that makes swallowing difficult.",
        "vn": "viêm họng / đau họng",
        "sentence": "I have a sore throat and cannot sing today.",
        "tpr": "Đặt một bàn tay lên cổ họng nhăn mặt khi nuốt nước bọt.",
        "img": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80"
    },
    "backache": {
        "word": "backache",
        "ipa": "/ˈbækeɪk/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A prolonged ache or pain located in one's spine or lower back.",
        "vn": "đau lưng",
        "sentence": "My grandfather has a backache from carrying heavy boxes.",
        "tpr": "Đặt hai bàn tay ra sau thắt lưng và khẽ ưỡn người xoa bóp.",
        "img": "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&auto=format&fit=crop&q=80"
    },
    "cold": {
        "word": "cold",
        "ipa": "/kəʊld/",
        "type": "Noun",
        "category": "Health",
        "explanation": "A common contagious viral infection causing a runny nose and sneezing.",
        "vn": "cảm lạnh / sổ mũi",
        "sentence": "Put on a thick coat so you don't catch a cold.",
        "tpr": "Lấy khăn giấy chấm mũi và làm động tác hắt hơi: 'Achoo!'.",
        "img": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80"
    },

    # Adjectives & Descriptions
    "tall": {
        "word": "tall",
        "ipa": "/tɔːl/",
        "type": "Adjective",
        "category": "Appearance",
        "explanation": "Of great or more than average height from head to toe.",
        "vn": "cao lớn",
        "sentence": "My father is very tall and strong.",
        "tpr": "Đứng thẳng kiễng chân giơ bàn tay lên cao trên đầu biểu thị chiều cao.",
        "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80"
    },
    "short": {
        "word": "short",
        "ipa": "/ʃɔːt/",
        "type": "Adjective",
        "category": "Appearance",
        "explanation": "Measuring a small distance from head to foot, not tall.",
        "vn": "thấp / lùn / ngắn",
        "sentence": "My little brother is short and cute.",
        "tpr": "Hạ bàn tay xuống ngang hông mô tả bạn nhỏ nhắn.",
        "img": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80"
    },
    "slim": {
        "word": "slim",
        "ipa": "/slɪm/",
        "type": "Adjective",
        "category": "Appearance",
        "explanation": "Gracefully thin, slender, and fit in body shape.",
        "vn": "thon thả / mảnh mai",
        "sentence": "Our English teacher is tall and slim.",
        "tpr": "Khép hai tay ép sát hai bên thân người thể hiện vóc dáng mảnh khảnh.",
        "img": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
    },
    "big": {
        "word": "big",
        "ipa": "/bɪɡ/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Of considerable size, extent, or intensity, not small.",
        "vn": "to / lớn",
        "sentence": "Look at that big gray elephant!",
        "tpr": "Dang rộng hai cánh tay hết cỡ: 'It is so big!'.",
        "img": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&auto=format&fit=crop&q=80"
    },
    "small": {
        "word": "small",
        "ipa": "/smɔːl/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Of a size that is less than normal or usual, little.",
        "vn": "nhỏ / bé",
        "sentence": "The tiny mouse has very small ears.",
        "tpr": "Chụm ngón cái và ngón trỏ lại thật gần nhau biểu thị kích thước bé xíu.",
        "img": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=600&auto=format&fit=crop&q=80"
    },
    "new": {
        "word": "new",
        "ipa": "/njuː/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Recently made, purchased, or discovered, not old.",
        "vn": "mới tinh",
        "sentence": "I have a shiny new English notebook.",
        "tpr": "Hai tay nâng đồ vật mới tinh lên ngắm nghía rạng rỡ.",
        "img": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
    },
    "old": {
        "word": "old",
        "ipa": "/əʊld/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Having lived or existed for a long time.",
        "vn": "già / cũ / tuổi",
        "sentence": "My grandfather is seventy years old.",
        "tpr": "Hơi khom lưng chống gậy mỉm cười hiền từ.",
        "img": "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=600&auto=format&fit=crop&q=80"
    },
    "young": {
        "word": "young",
        "ipa": "/jʌŋ/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "In the early period of life or growth, youthful.",
        "vn": "trẻ trung / trẻ tuổi",
        "sentence": "The young girl is playing joyfully with her friends.",
        "tpr": "Cười tươi nhảy chân sáo tràn đầy năng lượng tuổi thơ.",
        "img": "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&auto=format&fit=crop&q=80"
    },
    "kind": {
        "word": "kind",
        "ipa": "/kaɪnd/",
        "type": "Adjective",
        "category": "Personality",
        "explanation": "Having or showing a friendly, generous, and warm nature.",
        "vn": "tốt bụng / hiền hậu",
        "sentence": "Mai An Tiem was a very kind and hardworking man.",
        "tpr": "Đặt hai bàn tay lên ngực mỉm cười ấm áp và nhân hậu.",
        "img": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
    },
    "clever": {
        "word": "clever",
        "ipa": "/ˈklevə(r)/",
        "type": "Adjective",
        "category": "Personality",
        "explanation": "Quick to understand, learn, and devise good ideas.",
        "vn": "thông minh / khôn ngoan",
        "sentence": "The clever fox tricked the crow in the fable.",
        "tpr": "Dùng ngón tay trỏ gõ nhẹ lên thái dương biểu thị trí thông minh.",
        "img": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=600&auto=format&fit=crop&q=80"
    },
    "hard-working": {
        "word": "hard-working",
        "ipa": "/ˌhɑːd ˈwɜːkɪŋ/",
        "type": "Adjective",
        "category": "Personality",
        "explanation": "Putting a lot of dedicated effort and energy into one's tasks.",
        "vn": "chăm chỉ / cần cù",
        "sentence": "Vietnamese farmers are very hard-working and patient.",
        "tpr": "Lau mồ hôi trên trán và tiếp tục hăng say làm việc.",
        "img": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80"
    },
    "greedy": {
        "word": "greedy",
        "ipa": "/ˈɡriːdi/",
        "type": "Adjective",
        "category": "Personality",
        "explanation": "Having an excessive, selfish desire for wealth or food.",
        "vn": "tham lam",
        "sentence": "The greedy elder brother took all the golden starfruits.",
        "tpr": "Hai tay quơ quào ôm đầy đồ vật về phía mình không chịu chia sẻ.",
        "img": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80"
    },
    "peaceful": {
        "word": "peaceful",
        "ipa": "/ˈpiːsfl/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Free from disturbance, quiet, tranquil, and calm.",
        "vn": "yên bình / thanh bình",
        "sentence": "Life in our green village is very peaceful.",
        "tpr": "Hai bàn tay đưa nhẹ nhàng lướt trên làn gió thanh bình.",
        "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80"
    },
    "crowded": {
        "word": "crowded",
        "ipa": "/ˈkraʊdɪd/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Full of a large crowd of people, tightly packed.",
        "vn": "đông đúc / chật ních",
        "sentence": "The city center market is very crowded at weekends.",
        "tpr": "Khép hai khuỷu tay len lỏi bước qua dòng người đông đúc.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },
    "busy": {
        "word": "busy",
        "ipa": "/ˈbɪzi/",
        "type": "Adjective",
        "category": "Descriptions",
        "explanation": "Having a great deal of activity, traffic, or work to do.",
        "vn": "bận rộn / nhộn nhịp",
        "sentence": "The street is busy with cars, buses, and motorbikes.",
        "tpr": "Bước đi nhanh nhẹn và làm động tác liên tục xử lý công việc.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },

    # Daily Phrasal Actions & Routines
    "ride a bike": {
        "word": "ride a bike",
        "ipa": "/raɪd ə baɪk/",
        "type": "Phrase",
        "category": "Activities",
        "explanation": "To sit on a two-wheeled vehicle and pedal with your feet to travel forward.",
        "vn": "đạp xe đạp",
        "sentence": "Can you ride a bike? - Yes, I can.",
        "tpr": "Nắm hai tay làm tay lái xe đạp và xoay hai chân đạp vòng tròn.",
        "img": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop&q=80"
    },
    "play the guitar": {
        "word": "play the guitar",
        "ipa": "/pleɪ ðə ɡɪˈtɑː(r)/",
        "type": "Phrase",
        "category": "Music & Hobbies",
        "explanation": "To strum or pluck musical strings on a wooden acoustic instrument.",
        "vn": "chơi đàn ghi-ta",
        "sentence": "He can play the guitar very well.",
        "tpr": "Một tay bấm phím đàn, một tay gảy ngón nhịp nhàng.",
        "img": "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&auto=format&fit=crop&q=80"
    },
    "play the piano": {
        "word": "play the piano",
        "ipa": "/pleɪ ðə piˈænəʊ/",
        "type": "Phrase",
        "category": "Music & Hobbies",
        "explanation": "To press the black and white keys of a large keyboard instrument.",
        "vn": "chơi đàn pi-a-nô / dương cầm",
        "sentence": "Mary can play the piano beautifully.",
        "tpr": "Mười ngón tay lướt thoăn thoắt trên phím đàn tưởng tượng.",
        "img": "https://images.unsplash.com/photo-1520523839898-5071270453ff?w=600&auto=format&fit=crop&q=80"
    },
    "play football": {
        "word": "play football",
        "ipa": "/pleɪ ˈfʊtbɔːl/",
        "type": "Phrase",
        "category": "Sports",
        "explanation": "To kick a round ball on a green pitch with teammates into a net.",
        "vn": "chơi đá bóng",
        "sentence": "We play football in the stadium every Saturday.",
        "tpr": "Vung chân sút mạnh quả bóng tưởng tượng vào lưới.",
        "img": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80"
    },
    "play badminton": {
        "word": "play badminton",
        "ipa": "/pleɪ ˈbædmɪntən/",
        "type": "Phrase",
        "category": "Sports",
        "explanation": "To hit a light feathered shuttlecock over a high net using strung rackets.",
        "vn": "chơi cầu lông",
        "sentence": "Mai and Linh play badminton during break time.",
        "tpr": "Cầm vợt tưởng tượng vung tay đập quả cầu lông qua lưới.",
        "img": "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&auto=format&fit=crop&q=80"
    },
    "play chess": {
        "word": "play chess",
        "ipa": "/pleɪ tʃes/",
        "type": "Phrase",
        "category": "Games",
        "explanation": "To engage in a strategic board game using kings, queens, and pawns.",
        "vn": "chơi cờ vua",
        "sentence": "Peter and Nam often play chess together quietly.",
        "tpr": "Dùng hai ngón tay nhấc một quân cờ vua đặt sang ô mới một cách đăm chiêu.",
        "img": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&auto=format&fit=crop&q=80"
    },
    "do morning exercise": {
        "word": "do morning exercise",
        "ipa": "/duː ˈmɔːnɪŋ ˈeksəsaɪz/",
        "type": "Phrase",
        "category": "Routines",
        "explanation": "To perform healthy body stretches and movements early in the morning.",
        "vn": "tập thể dục buổi sáng",
        "sentence": "I always do morning exercise at six o'clock to stay fit.",
        "tpr": "Vươn hai tay lên cao, hít thở sâu và gập người tập thể dục: 1 - 2 - 3 - 4!",
        "img": "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80"
    },
    "brush teeth": {
        "word": "brush teeth",
        "ipa": "/brʌʃ tiːθ/",
        "type": "Phrase",
        "category": "Routines",
        "explanation": "To clean your mouth using a small bristled tool with minty paste.",
        "vn": "đánh răng",
        "sentence": "Brush your teeth twice a day to keep them sparkling white.",
        "tpr": "Cầm bàn chải tưởng tượng đưa lên xuống chải đều hai hàm răng.",
        "img": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80"
    },
    "wash face": {
        "word": "wash face",
        "ipa": "/wɒʃ feɪs/",
        "type": "Phrase",
        "category": "Routines",
        "explanation": "To cleanse your skin with cool, refreshing water upon waking.",
        "vn": "rửa mặt",
        "sentence": "I wash my face with cool water every morning.",
        "tpr": "Hai bàn tay xoa tròn quanh khuôn mặt rửa sạch tinh khôi.",
        "img": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80"
    },
    "have breakfast": {
        "word": "have breakfast",
        "ipa": "/hæv ˈbrekfəst/",
        "type": "Phrase",
        "category": "Routines",
        "explanation": "To eat the morning meal to energize your day of study.",
        "vn": "ăn bữa sáng",
        "sentence": "I have breakfast with my family before walking to school.",
        "tpr": "Cầm thìa nĩa xúc từng miếng thức ăn sáng bổ dưỡng.",
        "img": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
    },
    "do homework": {
        "word": "do homework",
        "ipa": "/duː ˈhəʊmwɜːk/",
        "type": "Phrase",
        "category": "School & Routines",
        "explanation": "To finish academic assignments given by school teachers at home.",
        "vn": "làm bài tập về nhà",
        "sentence": "I do my English homework at seven in the evening.",
        "tpr": "Cúi đầu chăm chú viết từng dòng bài tập vào vở.",
        "img": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80"
    },
    "watch TV": {
        "word": "watch TV",
        "ipa": "/wɒtʃ ˌtiː ˈviː/",
        "type": "Phrase",
        "category": "Activities",
        "explanation": "To view broadcast shows and entertaining cartoons on a screen.",
        "vn": "xem ti vi",
        "sentence": "I watch funny English cartoons on TV after finishing dinner.",
        "tpr": "Cầm điều khiển bấm chọn kênh và hào hứng xem màn hình.",
        "img": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80"
    },
    "surf the Internet": {
        "word": "surf the Internet",
        "ipa": "/sɜːf ði ˈɪntənet/",
        "type": "Phrase",
        "category": "Activities",
        "explanation": "To browse global online websites and search for information.",
        "vn": "lướt mạng Internet",
        "sentence": "He surfs the Internet to learn more about wild animals.",
        "tpr": "Lăn chuột máy tính và lướt tay trên màn hình cảm ứng.",
        "img": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80"
    },
    "clean the house": {
        "word": "clean the house",
        "ipa": "/kliːn ðə haʊs/",
        "type": "Phrase",
        "category": "Home Chores",
        "explanation": "To sweep, mop, and tidy living rooms so everything is spotless.",
        "vn": "dọn dẹp nhà cửa",
        "sentence": "I help my mother clean the house on Sunday mornings.",
        "tpr": "Cầm chổi quét nhà và lau dọn đồ đạc ngăn nắp.",
        "img": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80"
    },
    "see a doctor": {
        "word": "see a doctor",
        "ipa": "/siː ə ˈdɒktə(r)/",
        "type": "Phrase",
        "category": "Health",
        "explanation": "To visit a medical practitioner when you feel ill.",
        "vn": "đi khám bác sĩ",
        "sentence": "You have a high fever. You should see a doctor immediately.",
        "tpr": "Khoanh tay lắng nghe lời khuyên của bác sĩ.",
        "img": "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80"
    },
    "go to the dentist": {
        "word": "go to the dentist",
        "ipa": "/ɡəʊ tu ðə ˈdentɪst/",
        "type": "Phrase",
        "category": "Health",
        "explanation": "To have your teeth examined and cleaned by a tooth specialist.",
        "vn": "đi khám nha sĩ / khám răng",
        "sentence": "If you have a toothache, you should go to the dentist.",
        "tpr": "Há to miệng để nha sĩ kiểm tra hàm răng khỏe mạnh.",
        "img": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80"
    },
    "turn left": {
        "word": "turn left",
        "ipa": "/tɜːn left/",
        "type": "Phrase",
        "category": "Directions",
        "explanation": "To change direction toward the west or left side of your body.",
        "vn": "rẽ bên trái",
        "sentence": "Go straight and turn left at the traffic lights.",
        "tpr": "Chỉ dứt khoát cánh tay sang phía bên trái: 'Turn left!'.",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
    },
    "turn right": {
        "word": "turn right",
        "ipa": "/tɜːn raɪt/",
        "type": "Phrase",
        "category": "Directions",
        "explanation": "To change direction toward the east or right side of your body.",
        "vn": "rẽ bên phải",
        "sentence": "Turn right at the bookstore to find the cinema.",
        "tpr": "Chỉ dứt khoát cánh tay sang phía bên phải: 'Turn right!'.",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
    },
    "go straight": {
        "word": "go straight",
        "ipa": "/ɡəʊ streɪt/",
        "type": "Phrase",
        "category": "Directions",
        "explanation": "To continue moving directly ahead without turning aside.",
        "vn": "đi thẳng",
        "sentence": "Go straight ahead for two hundred meters.",
        "tpr": "Đưa cánh tay thẳng tắp về phía trước ra hiệu đi thẳng.",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
    }
}
print(f"Part 3 loaded with {len(PART3_ENTRIES)} entries.")
