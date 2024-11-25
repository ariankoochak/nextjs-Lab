
/**
 * 
 * @returns {Array} a array contains last 7 date with this format => 'YYYY-MM-DD'
 */
function getLast7Days(){
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        days.push(date.toISOString().split("T")[0]);
    }

    return days.reverse();
}

export default getLast7Days;