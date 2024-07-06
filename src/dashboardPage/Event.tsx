class Event {
    id: number;
    name: string;
    date: string;
    time: string;
    venue: string;
    content: string;
    status: 'completed/terminated' | 'in progress' | 'upcoming';
  
    constructor(name: string, date: string, time: string, venue: string, content: string) {
      this.id = Math.floor(Math.random() * 1000); // Example of generating a unique ID
      this.name = name;
      this.date = date;
      this.time = time;
      this.venue = venue;
      this.content = content;
      this.status = 'upcoming'; // Initial status for a newly added event
    }
  }