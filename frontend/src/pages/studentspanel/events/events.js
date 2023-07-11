import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
    {
      start: new Date(2023, 5, 7, 10, 0),
      end: new Date(2023, 5, 7, 12, 0),
      title: 'supplimentary exams'
    },
    {
      start: new Date(2023, 5, 8, 14, 0),
      end: new Date(2023, 5, 8, 16, 0),
      title: 'opening of school'
    },
    // Add more events as needed
  ];
  

function Events(){
    return(
        <div  style={{ backgroundColor: 'whitesmoke', width: '100%', height: '100%', position: 'absolute', margin: '0' }}>
            <h1>recents events</h1>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
        </div>
    )

}

export default Events