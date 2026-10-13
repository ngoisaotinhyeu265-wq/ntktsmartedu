# -*- coding: utf-8 -*-
"""
Part 2: Food, Places, Transport, Clothes, Animals
"""

PART2_ENTRIES = {
    # Food & Drinks
    "beef": {
        "word": "beef",
        "ipa": "/biːf/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "Nutritious meat from cattle, delicious when stir-fried with vegetables.",
        "vn": "thịt bò",
        "sentence": "Would you like some stir-fried beef? - Yes, please.",
        "tpr": "Làm động tác đảo chảo xào thịt bò thơm lừng.",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
    },
    "pork": {
        "word": "pork",
        "ipa": "/pɔːk/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "Meat from pigs, commonly cooked in delicious Vietnamese dishes.",
        "vn": "thịt lợn / thịt heo",
        "sentence": "We have braised pork and rice for dinner.",
        "tpr": "Làm động tác gắp miếng thịt heo thơm ngậy vào bát cơm.",
        "img": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80"
    },
    "sausage": {
        "word": "sausage",
        "ipa": "/ˈsɒsɪdʒ/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "Minced seasoned meat stuffed into a cylindrical casing, savory when grilled.",
        "vn": "xúc xích",
        "sentence": "I like eating grilled sausage with tomato sauce.",
        "tpr": "Hai bàn tay tạo hình chiếc xúc xích tròn dài và cắn một miếng ngon lành.",
        "img": "https://images.unsplash.com/photo-1585325701165-351af916e581?w=600&auto=format&fit=crop&q=80"
    },
    "lemonade": {
        "word": "lemonade",
        "ipa": "/ˌleməˈneɪd/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "A refreshing drink prepared with fresh lemon juice, pure water, and sugar.",
        "vn": "nước chanh",
        "sentence": "A cold glass of sweet lemonade is wonderful on hot days.",
        "tpr": "Khuấy đều ly nước chanh đá và hút một ngụm mát lạnh.",
        "img": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
    },
    "orange juice": {
        "word": "orange juice",
        "ipa": "/ˈɒrɪndʒ dʒuːs/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "A vitamin C-rich beverage squeezed from fresh sweet oranges.",
        "vn": "nước cam ép",
        "sentence": "Would you like some orange juice? - Yes, please.",
        "tpr": "Làm động tác vắt nửa quả cam vào ly thủy tinh.",
        "img": "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&auto=format&fit=crop&q=80"
    },
    "chocolate": {
        "word": "chocolate",
        "ipa": "/ˈtʃɒklət/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "A sweet rich brown treat made from roasted ground cacao beans.",
        "vn": "sô-cô-la",
        "sentence": "She gave me a bar of sweet milk chocolate.",
        "tpr": "Bẻ một thanh sô-cô-la và thưởng thức vị ngọt ngào.",
        "img": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=600&auto=format&fit=crop&q=80"
    },
    "cake": {
        "word": "cake",
        "ipa": "/keɪk/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "A sweet baked dessert made of flour, eggs, and sugar, iced for birthdays.",
        "vn": "bánh ngọt / bánh sinh nhật",
        "sentence": "Blow out the candles on your birthday cake!",
        "tpr": "Làm động tác thổi nến trên chiếc bánh sinh nhật: 'Phùuu!'.",
        "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
    },
    "sandwich": {
        "word": "sandwich",
        "ipa": "/ˈsænwɪtʃ/",
        "type": "Noun",
        "category": "Food & Drinks",
        "explanation": "Two slices of bread with meat, cheese, or vegetables between them.",
        "vn": "bánh mì kẹp xăng-đuých",
        "sentence": "I take a chicken and lettuce sandwich for school lunch.",
        "tpr": "Hai bàn tay kẹp lại như hai lát bánh mì và cắn thưởng thức.",
        "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80"
    },
    "breakfast": {
        "word": "breakfast",
        "ipa": "/ˈbrekfəst/",
        "type": "Noun",
        "category": "Meals & Daily",
        "explanation": "The first nutritious meal of the day eaten in the morning after waking.",
        "vn": "bữa ăn sáng",
        "sentence": "I have breakfast at six thirty every morning.",
        "tpr": "Làm động tác ăn sáng ngon lành trước khi đeo ba lô đi học.",
        "img": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
    },
    "lunch": {
        "word": "lunch",
        "ipa": "/lʌntʃ/",
        "type": "Noun",
        "category": "Meals & Daily",
        "explanation": "A meal eaten in the middle of the day around noontime.",
        "vn": "bữa ăn trưa",
        "sentence": "Students have lunch together in the school canteen.",
        "tpr": "Cầm khay cơm trưa và chia sẻ cùng các bạn học sinh.",
        "img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
    },
    "dinner": {
        "word": "dinner",
        "ipa": "/ˈdɪnə(r)/",
        "type": "Noun",
        "category": "Meals & Daily",
        "explanation": "The main evening meal enjoyed together with family at home.",
        "vn": "bữa ăn tối",
        "sentence": "My family gathers around the table for a warm dinner.",
        "tpr": "Hai tay mời cả gia đình dùng bữa tối ấm cúng.",
        "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80"
    },

    # Clothes
    "T-shirt": {
        "word": "T-shirt",
        "ipa": "/ˈtiː ʃɜːt/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A casual short-sleeved cotton shirt without a collar, shaped like the letter T.",
        "vn": "áo phông / áo thun",
        "sentence": "I wear a cool white T-shirt and blue shorts in summer.",
        "tpr": "Kéo nhẹ hai bên vạt áo phông của mình khoe áo đẹp.",
        "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80"
    },
    "skirt": {
        "word": "skirt",
        "ipa": "/skɜːt/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A garment hanging from the waist worn by girls and women.",
        "vn": "chân váy / chiếc váy ngắn",
        "sentence": "She wears a pretty dark blue skirt to school.",
        "tpr": "Hai tay khẽ xòe vạt váy sang hai bên duyên dáng.",
        "img": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=80"
    },
    "trousers": {
        "word": "trousers",
        "ipa": "/ˈtraʊzəz/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A piece of clothing covering the body from waist to ankles on both legs.",
        "vn": "quần dài",
        "sentence": "Nam wears clean dark blue trousers on Mondays.",
        "tpr": "Chỉ hai tay dọc theo ống quần dài.",
        "img": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=80"
    },
    "sandals": {
        "word": "sandals",
        "ipa": "/ˈsændlz/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "Light shoes consisting of a sole fastened to the foot by straps.",
        "vn": "dép quai hậu / xăng-đan",
        "sentence": "I wear light brown sandals when it is warm.",
        "tpr": "Làm động tác cài quai dép xăng-đan quanh cổ chân.",
        "img": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=600&auto=format&fit=crop&q=80"
    },
    "sweater": {
        "word": "sweater",
        "ipa": "/ˈswetə(r)/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A warm knitted woolen garment worn over the upper body in cold winter.",
        "vn": "áo len ấm",
        "sentence": "Wear your thick red sweater when going outside in winter.",
        "tpr": "Hai tay ôm lấy hai vai xoa xoa thể hiện sự ấm áp của áo len.",
        "img": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80"
    },
    "jumper": {
        "word": "jumper",
        "ipa": "/ˈdʒʌmpə(r)/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A knitted pullover garment worn to keep your chest and arms warm.",
        "vn": "áo len chui đầu",
        "sentence": "My mother knitted a lovely blue jumper for me.",
        "tpr": "Làm động tác tròng áo len qua đầu và xỏ tay vào ống áo.",
        "img": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80"
    },
    "scarf": {
        "word": "scarf",
        "ipa": "/skɑːf/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A piece of soft fabric worn around the neck for warmth in winter.",
        "vn": "khăn quàng cổ",
        "sentence": "Wrap this wool scarf around your neck to stay warm.",
        "tpr": "Làm động tác quàng khăn mềm quanh cổ.",
        "img": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&auto=format&fit=crop&q=80"
    },
    "socks": {
        "word": "socks",
        "ipa": "/sɒks/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "Garments for the feet and lower legs made of soft knitted cotton.",
        "vn": "đôi tất / đôi vớ",
        "sentence": "Put on clean white socks before wearing your sports shoes.",
        "tpr": "Kéo ống tất lên trên mắt cá chân.",
        "img": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80"
    },
    "dress": {
        "word": "dress",
        "ipa": "/dres/",
        "type": "Noun",
        "category": "Clothes",
        "explanation": "A one-piece garment for women and girls that covers body and legs.",
        "vn": "chiếc váy liền / đầm",
        "sentence": "Mai wears a lovely pink dress on her birthday.",
        "tpr": "Hai tay nâng tà váy bồng bềnh xoay một vòng duyên dáng.",
        "img": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&auto=format&fit=crop&q=80"
    },

    # Places & Geography
    "city": {
        "word": "city",
        "ipa": "/ˈsɪti/",
        "type": "Noun",
        "category": "Places",
        "explanation": "A large human settlement with tall buildings, wide avenues, and busy streets.",
        "vn": "thành phố",
        "sentence": "Da Nang is a modern and beautiful coastal city.",
        "tpr": "Giơ hai tay cao chỉ những tòa nhà cao tầng chọc trời.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },
    "town": {
        "word": "town",
        "ipa": "/taʊn/",
        "type": "Noun",
        "category": "Places",
        "explanation": "An urban settlement smaller than a city but larger than a village.",
        "vn": "thị trấn / phố nhỏ",
        "sentence": "Hoi An is an attractive ancient town with yellow lanterns.",
        "tpr": "Chỉ tay giới thiệu những dãy phố cổ kính thanh bình.",
        "img": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80"
    },
    "countryside": {
        "word": "countryside",
        "ipa": "/ˈkʌntrisaɪd/",
        "type": "Noun",
        "category": "Places",
        "explanation": "Land outside towns and cities, characterized by fields, rivers, and trees.",
        "vn": "vùng nông thôn / miền quê",
        "sentence": "The air in the countryside is very fresh and peaceful.",
        "tpr": "Dang rộng hai tay hít một hơi thật sâu không khí trong lành miền quê.",
        "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80"
    },
    "hometown": {
        "word": "hometown",
        "ipa": "/ˈhəʊmtaʊn/",
        "type": "Noun",
        "category": "Places",
        "explanation": "The town or village where one was born or spent childhood.",
        "vn": "quê hương / quê nhà",
        "sentence": "My hometown is a quiet seaside village in central Vietnam.",
        "tpr": "Đặt tay lên trái tim với tình yêu quê hương da diết.",
        "img": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80"
    },
    "street": {
        "word": "street",
        "ipa": "/striːt/",
        "type": "Noun",
        "category": "Places",
        "explanation": "A public road in a city or town with houses or shops on both sides.",
        "vn": "con phố / đường phố",
        "sentence": "I live at 81 Tran Hung Dao Street.",
        "tpr": "Chỉ tay về phía con phố nhộn nhịp trước mặt.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },
    "avenue": {
        "word": "avenue",
        "ipa": "/ˈævənjuː/",
        "type": "Noun",
        "category": "Places",
        "explanation": "A broad, prominent road in a town or city, typically lined with green trees.",
        "vn": "đại lộ",
        "sentence": "The grand parade marched down the wide avenue.",
        "tpr": "Mở rộng hai cánh tay chỉ con đại lộ thênh thang rợp bóng cây.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },
    "lane": {
        "word": "lane",
        "ipa": "/leɪn/",
        "type": "Noun",
        "category": "Places",
        "explanation": "A narrow road or alleyway between houses in a residential neighborhood.",
        "vn": "con ngõ / ngách nhỏ",
        "sentence": "My house is located at the end of this quiet lane.",
        "tpr": "Khép hai tay hẹp chỉ lối vào con ngõ nhỏ yên tĩnh.",
        "img": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80"
    },
    "flat": {
        "word": "flat",
        "ipa": "/flæt/",
        "type": "Noun",
        "category": "House & Places",
        "explanation": "A set of rooms for living in, situated on one floor of a large building.",
        "vn": "căn hộ chung cư",
        "sentence": "I live in flat 18 on the second floor of City Tower.",
        "tpr": "Chỉ tay lên một tầng của tòa nhà chung cư.",
        "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80"
    },
    "tower": {
        "word": "tower",
        "ipa": "/ˈtaʊə(r)/",
        "type": "Noun",
        "category": "Places",
        "explanation": "A tall, narrow building rising high above the ground.",
        "vn": "tòa tháp / tòa nhà cao tầng",
        "sentence": "Look at the twin tower shining in the city center.",
        "tpr": "Đứng kiễng chân giơ hai tay chóp nhọn vươn cao như đỉnh tháp.",
        "img": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80"
    },
    "floor": {
        "word": "floor",
        "ipa": "/flɔː(r)/",
        "type": "Noun",
        "category": "House & Places",
        "explanation": "A level of a building, such as the ground floor or second floor.",
        "vn": "tầng lầu / sàn nhà",
        "sentence": "Our primary classroom is on the third floor.",
        "tpr": "Đưa tay ngang từng tầng nâng dần lên cao: tầng 1, tầng 2, tầng 3.",
        "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80"
    },
    "island": {
        "word": "island",
        "ipa": "/ˈaɪlənd/",
        "type": "Noun",
        "category": "Nature & Places",
        "explanation": "A piece of land surrounded completely on all sides by blue water.",
        "vn": "hòn đảo",
        "sentence": "Phu Quoc is a breathtaking tropical island in Vietnam.",
        "tpr": "Vẽ một vòng tròn nước bao quanh mỏm đất nổi lên.",
        "img": "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format&fit=crop&q=80"
    },
    "mountains": {
        "word": "mountains",
        "ipa": "/ˈmaʊntɪnz/",
        "type": "Noun",
        "category": "Nature & Places",
        "explanation": "Large natural elevations of the earth's surface rising abruptly from surrounding land.",
        "vn": "dãy núi non hùng vĩ",
        "sentence": "The misty mountains in Sapa look majestic and grand.",
        "tpr": "Hai cánh tay bắt chéo tạo hình các đỉnh núi nhấp nhô cao vút.",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80"
    },
    "bay": {
        "word": "bay",
        "ipa": "/beɪ/",
        "type": "Noun",
        "category": "Nature & Places",
        "explanation": "A broad inlet of the sea where land curves inward, calm and scenic.",
        "vn": "vịnh biển",
        "sentence": "Ha Long Bay is famous worldwide for emerald waters and limestone islets.",
        "tpr": "Vòng hai cánh tay ôm trọn vùng vịnh biển êm đềm xanh biếc.",
        "img": "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=80"
    },
    "beach": {
        "word": "beach",
        "ipa": "/biːtʃ/",
        "type": "Noun",
        "category": "Nature & Places",
        "explanation": "A pebbly or sandy shore by the ocean where waves wash in gently.",
        "vn": "bãi biển",
        "sentence": "We walk barefoot on the soft golden beach.",
        "tpr": "Cúi người làm động tác đắp lâu đài cát trên bãi biển.",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
    },

    # Wild Animals
    "kangaroo": {
        "word": "kangaroo",
        "ipa": "/ˌkæŋɡəˈruː/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A large Australian mammal that hops on powerful hind legs with a front pouch.",
        "vn": "chuột túi căng-gu-ru",
        "sentence": "The mother kangaroo carries her tiny baby inside her warm pouch.",
        "tpr": "Hai tay chụm trước ngực nhún chân bật nhảy lò cò: 'Boing boing boing!'.",
        "img": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80"
    },
    "crocodile": {
        "word": "crocodile",
        "ipa": "/ˈkrɒkədaɪl/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A large predatory reptile with rough armored skin and powerful snapping jaws.",
        "vn": "con cá sấu",
        "sentence": "The green crocodile is sunbathing quietly by the riverbank.",
        "tpr": "Dang hai cánh tay dài rồi đập mạnh vào nhau làm hàm cá sấu đớp mồi: 'Snap!'.",
        "img": "https://images.unsplash.com/photo-1520542356247-c33ea9fc6c52?w=600&auto=format&fit=crop&q=80"
    },
    "horse": {
        "word": "horse",
        "ipa": "/hɔːs/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A noble four-legged mammal with hooves and a flowing mane, ridden by humans.",
        "vn": "con ngựa",
        "sentence": "The brown horse gallops fast across the green meadow.",
        "tpr": "Hai tay cầm dây cương nhấp nhổm cưỡi ngựa phi: 'Lộp cộp lộp cộp!'.",
        "img": "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&auto=format&fit=crop&q=80"
    },
    "duck": {
        "word": "duck",
        "ipa": "/dʌk/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A swimming water bird with waterproof feathers, webbed feet, and a flat bill.",
        "vn": "con vịt",
        "sentence": "The yellow duck swims in the pond: Quack, quack!",
        "tpr": "Chắp hai bàn tay trước miệng làm mỏ vịt kêu: 'Quack quack quack!'.",
        "img": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80"
    },
    "pig": {
        "word": "pig",
        "ipa": "/pɪɡ/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A friendly pink farm animal with a short snout, curly tail, and funny grunts.",
        "vn": "con lợn / con heo",
        "sentence": "The pink pig is rolling happily in the farm yard.",
        "tpr": "Dùng ngón tay ấn nhẹ đầu mũi hếch lên và kêu: 'Oink oink!'.",
        "img": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&auto=format&fit=crop&q=80"
    },
    "cow": {
        "word": "cow",
        "ipa": "/kaʊ/",
        "type": "Noun",
        "category": "Animals",
        "explanation": "A domestic bovine farm animal that grazes green pastures and gives wholesome milk.",
        "vn": "con bò sữa",
        "sentence": "The black and white cow gives fresh creamy milk every day.",
        "tpr": "Đặt hai ngón tay lên trán làm đôi sừng bò và kêu: 'Moo moo!'.",
        "img": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&auto=format&fit=crop&q=80"
    }
}
print(f"Part 2 loaded with {len(PART2_ENTRIES)} entries.")
