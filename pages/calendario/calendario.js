function showCalendar(monthId) {
    document.querySelectorAll('.calendar-container').forEach(calendar => {
      calendar.style.display = 'none';
    });
    document.getElementById(monthId).style.display = 'block';
  }