function printLeaderboard(players) {
    // Sắp xếp từ cao xuống thấp
    players.sort((a, b) => b.score - a.score);
    // thêm huy chương
    const medals = ["🥇", "🥈", "🥉"];
    // in bảng xếp hạng vs huy chương cho 3 vị trí đầu
    players.forEach((player, index) => {
        const medal = medals[index] || "  ";
        // phân hàng ngàn
        const scoreStr = player.score.toLocaleString(); 
        // in bảng xếp hạng
        console.log(`${medal} ${index + 1}. ${player.name} - ${scoreStr} pts`);
    });
}
// Test
const players = [
    { name: 'Mario', score: 1000 },
    { name: 'Luigi', score: 900 },
    { name: 'Peach', score: 850 },
    { name: 'Yoshi', score: 800 },
    { name: 'Phong', score: 500 }
];

printLeaderboard(players);