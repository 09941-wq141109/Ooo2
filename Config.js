/**
 * config.js — ค่าคงที่ทั้งหมดของเกม (ปรับบาลานซ์ได้จากที่นี่ที่เดียว)
 */
window.BW = window.BW || {};

(function (BW) {
    const RADIUS = 17;

    BW.CONFIG = {
        WIDTH: 800,
        HEIGHT: 520,

        // ขนาดบับเบิลและตาราง
        RADIUS: RADIUS,
        ROW_HEIGHT: RADIUS * Math.sqrt(3),
        COLS: 11,          // แถวยาว = 11 ลูก, แถวสั้น = 10 ลูก
        ROWS: 18,

        // พื้นที่เล่น (11 * 34 = 374px)
        FIELD_LEFT: 213,
        FIELD_RIGHT: 587,
        CEILING_Y: 62,     // ต่ำกว่าแถบ HUD ด้านบน
        GROUND_Y: 410,     // บับเบิลแตะเส้นนี้ = แพ้
        CANNON: { x: 400, y: 465 },

        // กติกา
        GAME_SECONDS: 60,
        START_ROWS: 5,
        MIN_MATCH: 3,
        POP_SCORE: 150,
        FLOAT_SCORE: 300,
        GOAL_PER_LEVEL: 20,     // ต้องแตกกี่ลูกเพื่อขึ้นเลเวล (คูณด้วยเลเวล)
        LEVEL_TIME_BONUS: 5,    // วินาทีโบนัสเมื่อขึ้นเลเวล

        // ความเร็ว (พิกเซล/วินาที)
        DROP_SPEED: 4,
        DROP_SPEED_STEP: 0.6,
        DROP_SPEED_MAX: 10,
        SHOT_SPEED: 900,
        HIT_DISTANCE: RADIUS * 1.85,

        TYPES: [
            { color: '#fcd34d', border: '#f59e0b', icon: '🔥' },
            { color: '#f472b6', border: '#db2777', icon: '🍄' },
            { color: '#a78bfa', border: '#7c3aed', icon: '⭐' }
        ]
    };
})(window.BW);
