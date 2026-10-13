#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Part 2 of enriched curated definitions:
Sentence patterns, frequencies, prepositions, classroom expressions.
"""

ENRICHED_DEFINITIONS_PART2 = {
    # Communicative Sentence Patterns
    "what are you going to do": {
        "word": "What are you going to do?",
        "ipa": "/wɒt ɑː juː ˈɡəʊɪŋ tuː duː/",
        "type": "Sentence Pattern",
        "category": "Questions & Future Plans",
        "explanation": "A friendly question used to ask about someone's future intentions or planned vacation activities.",
        "vn": "Bạn dự định sẽ làm gì?",
        "sentence": "What are you going to do this summer holiday? - I'm going to visit Ha Long Bay.",
        "tpr": "Xòe hai bàn tay nghiêng đầu hỏi bạn về kế hoạch tương lai.",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
    },
    "what does he look like": {
        "word": "What does he look like?",
        "ipa": "/wɒt dʌz hiː lʊk laɪk/",
        "type": "Sentence Pattern",
        "category": "Appearance Questions",
        "explanation": "A question used to ask about someone's physical appearance (such as height, build, and hair).",
        "vn": "Cậu ấy/ông ấy trông như thế nào?",
        "sentence": "What does your father look like? - He is tall and slim.",
        "tpr": "Đưa tay ước lượng chiều cao và vóc dáng của một người.",
        "img": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80"
    },
    "what is your address": {
        "word": "What is your address?",
        "ipa": "/wɒt ɪz jɔː(r) əˈdres/",
        "type": "Sentence Pattern",
        "category": "Location Questions",
        "explanation": "A question inquiring about the street number, road, or apartment where someone resides.",
        "vn": "Địa chỉ của bạn là gì?",
        "sentence": "What is your address? - It's 105 Hoa Binh Lane.",
        "tpr": "Làm động tác ghi chép số nhà và tên đường vào sổ tay.",
        "img": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80"
    },
    "where did you go": {
        "word": "Where did you go?",
        "ipa": "/weə dɪd juː ɡəʊ/",
        "type": "Sentence Pattern",
        "category": "Past Questions",
        "explanation": "A question asking about the destination or place a person visited in the past.",
        "vn": "Bạn đã đi đâu?",
        "sentence": "Where did you go on holiday? - I went to Phu Quoc Island.",
        "tpr": "Chỉ tay ra phía chân trời hỏi về chuyến đi vừa qua.",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
    },
    "what happened": {
        "word": "What happened?",
        "ipa": "/wɒt ˈhæpənd/",
        "type": "Sentence Pattern",
        "category": "Storytelling Questions",
        "explanation": "A question asking about the plot twist or unfolding events in a story or incident.",
        "vn": "Chuyện gì đã xảy ra thế?",
        "sentence": "What happened in the story? - First, the poor man found a magical golden starfruit tree.",
        "tpr": "Mở to mắt ngạc nhiên xòe hai tay hỏi chuyện gì đã diễn ra.",
        "img": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80"
    },
    "would you like": {
        "word": "Would you like...?",
        "ipa": "/wʊd juː laɪk/",
        "type": "Sentence Pattern",
        "category": "Polite Invitations",
        "explanation": "A courteous, hospitable phrase used to offer delicious food, drinks, or an invitation.",
        "vn": "Bạn có muốn dùng... không?",
        "sentence": "Would you like some orange juice? - Yes, please. / No, thanks.",
        "tpr": "Hai tay nâng đĩa thức ăn nhẹ nhàng mời bạn lịch thiệp.",
        "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80"
    },
    "how much is": {
        "word": "How much is...?",
        "ipa": "/haʊ mʌtʃ ɪz/",
        "type": "Sentence Pattern",
        "category": "Shopping Questions",
        "explanation": "A question used in stores and shops to ask the cost or retail price of an item.",
        "vn": "Cái này giá bao nhiêu tiền?",
        "sentence": "How much is this red jumper? - It's two hundred thousand dong.",
        "tpr": "Chỉ vào món đồ trong tiệm và chà nhẹ đầu ngón tay hỏi giá.",
        "img": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80"
    },
    "how many": {
        "word": "How many...?",
        "ipa": "/haʊ ˈmeni/",
        "type": "Sentence Pattern",
        "category": "Quantity Questions",
        "explanation": "A question used to count and ask for the total number of people, pets, or objects.",
        "vn": "Có bao nhiêu...?",
        "sentence": "How many lessons do you have today? - I have four lessons.",
        "tpr": "Xòe từng ngón tay làm động tác đếm số lượng: 1, 2, 3...",
        "img": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80"
    },
    "why do you like": {
        "word": "Why do you like...?",
        "ipa": "/waɪ duː juː laɪk/",
        "type": "Sentence Pattern",
        "category": "Reason Questions",
        "explanation": "A question asking for the reason or motivation behind enjoying a subject, hobby, or song.",
        "vn": "Tại sao bạn lại thích...?",
        "sentence": "Why do you like English? - Because I want to talk with foreign friends.",
        "tpr": "Đặt ngón tay lên cằm suy nghĩ lý do trước khi trả lời.",
        "img": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80"
    },

    # Prepositions & Locations
    "between": {
        "word": "between",
        "ipa": "/bɪˈtwiːn/",
        "type": "Preposition",
        "category": "Positions",
        "explanation": "In the middle space that separates two distinct buildings, objects, or people.",
        "vn": "ở giữa (hai vật hoặc hai người)",
        "sentence": "The pharmacy is between the bookshop and the bakery.",
        "tpr": "Đặt một bàn tay chính giữa hai bàn tay của hai bạn bên cạnh.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },
    "next to": {
        "word": "next to",
        "ipa": "/nekst tuː/",
        "type": "Preposition",
        "category": "Positions",
        "explanation": "In a position immediately adjacent or beside something.",
        "vn": "ở ngay bên cạnh",
        "sentence": "My best friend sits next to me in the English classroom.",
        "tpr": "Chỉ sang người bạn đang ngồi sát ngay cạnh mình.",
        "img": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
    },
    "opposite": {
        "word": "opposite",
        "ipa": "/ˈɒpəzɪt/",
        "type": "Preposition",
        "category": "Positions",
        "explanation": "Positioned directly across a street or room, facing facing each other.",
        "vn": "ở đối diện",
        "sentence": "The modern cinema is right opposite the grand theatre.",
        "tpr": "Hai bàn tay đưa ra đối diện mặt nhau qua một con đường.",
        "img": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80"
    },

    # Frequency & Time
    "once a week": {
        "word": "once a week",
        "ipa": "/wʌns ə wiːk/",
        "type": "Adverbial Phrase",
        "category": "Frequency",
        "explanation": "Happening exactly one time during each seven-day period.",
        "vn": "mỗi tuần một lần",
        "sentence": "I have Music lesson once a week on Wednesday morning.",
        "tpr": "Giơ 1 ngón tay biểu thị đúng một lần trong tuần.",
        "img": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80"
    },
    "twice a week": {
        "word": "twice a week",
        "ipa": "/twaɪs ə wiːk/",
        "type": "Adverbial Phrase",
        "category": "Frequency",
        "explanation": "Happening two times during each seven-day period.",
        "vn": "mỗi tuần hai lần",
        "sentence": "Nam attends his martial arts club twice a week.",
        "tpr": "Giơ 2 ngón tay biểu thị hai lần trong tuần.",
        "img": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80"
    },
    "three times a week": {
        "word": "three times a week",
        "ipa": "/θriː taɪmz ə wiːk/",
        "type": "Adverbial Phrase",
        "category": "Frequency",
        "explanation": "Happening three times during each seven-day period.",
        "vn": "mỗi tuần ba lần",
        "sentence": "We study English three times a week in primary school.",
        "tpr": "Giơ 3 ngón tay biểu thị ba lần trong tuần.",
        "img": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80"
    },
    "every school day": {
        "word": "every school day",
        "ipa": "/ˈevri skuːl deɪ/",
        "type": "Adverbial Phrase",
        "category": "Frequency",
        "explanation": "On each day from Monday to Friday when classes are held.",
        "vn": "mỗi ngày đi học (từ thứ Hai đến thứ Sáu)",
        "sentence": "I have Vietnamese and Maths every school day.",
        "tpr": "Lần lượt điểm tên 5 ngày học trong tuần từ thứ 2 đến thứ 6.",
        "img": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&auto=format&fit=crop&q=80"
    },
    "in the end": {
        "word": "in the end",
        "ipa": "/ɪn ði end/",
        "type": "Adverbial Phrase",
        "category": "Narrative Connectors",
        "explanation": "Finally, at the last moment or conclusion of a story or adventure.",
        "vn": "cuối cùng / kết cục câu chuyện",
        "sentence": "In the end, the kind prince and princess lived happily ever after.",
        "tpr": "Gập hai bàn tay khép lại trang sách kết thúc có hậu.",
        "img": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80"
    }
}
print(f"Loaded {len(ENRICHED_DEFINITIONS_PART2)} enriched definitions (Part 2).")
