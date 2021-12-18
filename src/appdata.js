import { v4 as uuidv4 } from "uuid";

function chillHopData() {
    return [
        {
            id: uuidv4(),
            // cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
            cover: "./assets/Elton_John.jpg",
            name: "Cold Heart (PNAU Remix)",
            artist: "Elton John, Dua Lipa",
            // audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
            audio: "./assets/Elton_John.mp3",
            color: ["#5F92D3", "#C8CAC5"],
            active: true,
        },
        {
            id: uuidv4(),
            // cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
            cover: "./assets/JayKo.jpg",
            name: "Remixes 2021",
            artist: "JayKo",
            // audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
            audio: "./assets/JayKo.mp3",
            color: ["#5F92D3", "#C8CAC5"],
            active: true,
        },
        {
            id: uuidv4(),
            // cover: 'https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg',
            cover: "./assets/Lady.jpg",
            name: "Always remember us this way (reggae remix)",
            artist: "Lady Gaga",
            // audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058',
            audio: "./assets/Lady_Gaga.mp3",
            color: ["#5F92D3", "#C8CAC5"],
            active: true,
        },
    ];
}

export default chillHopData;
