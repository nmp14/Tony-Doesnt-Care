module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    // TODO: Create a custom helper 'format_date' that takes in a timestamp,
    // adds five years to the date, and formats it as M/D/YYYY
    format_date: (timestamp) => {
        const year = timestamp.getFullYear();
        const month = timestamp.getMonth() + 1;
        const day = timestamp.getDate();
        return `${month}/${day}/${year}`;
    }
};