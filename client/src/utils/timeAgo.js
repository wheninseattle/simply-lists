export const timeAgo = (date) => {
  const originalDate = new Date(`${date}`).getTime();
  const currentDate = new Date().getTime();
  const timeDiff = Math.abs(originalDate - currentDate);
  switch (true) {
    case timeDiff < 1000 * 60:
      return "Moments ago";
    case timeDiff < 1000 * 60 * 60:
      let minutes = Math.floor(timeDiff / (1000 * 60));
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    case timeDiff < 1000 * 60 * 60 * 24:
      let hours = Math.floor(timeDiff / (1000 * 60 * 60));
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    case timeDiff < 1000 * 60 * 60 * 24 * 7:
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      return days === 1 ? "1 day ago" : `${days} days ago`;
    case timeDiff < 1000 * 60 * 60 * 24 * 7 * 52:
      let weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    case timeDiff > 1000 * 60 * 60 * 24 * 7 * 52:
      let years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 52));
      return years === 1 ? "1 year ago" : `${years} years ago`;
    default:
      return "Ages ago";
  }
};
