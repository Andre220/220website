function setDates()
{
    var currentYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = currentYear;
    document.getElementById("idade").innerHTML = currentYear - 1997;
}
