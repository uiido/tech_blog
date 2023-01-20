module.exports = {
    format_date: date => {
        // Returns date in Month, Day, Year Format
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
}