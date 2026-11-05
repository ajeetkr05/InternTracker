export function formatDisplayDate(strDate){
    const [day, month, year] = strDate.split("-");
    const dateObj = new Date(year, month-1, day);
    return dateObj.toLocaleDateString("en-GB", {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}