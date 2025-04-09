export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondsPast = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (secondsPast < 60) {
        return `${secondsPast}s ago`;
    }
    if (secondsPast < 3600) {
        return `${Math.floor(secondsPast / 60)}m ago`;
    }
    if (secondsPast < 86400) {
        return `${Math.floor(secondsPast / 3600)}h ago`;
    }
    const days = Math.floor(secondsPast / 86400);
    return days === 1 ? '1 day ago' : `${days} days ago`;
};