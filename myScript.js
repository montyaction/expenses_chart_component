const bars = document.querySelectorAll('.bar');
const tooltips = document.querySelectorAll('.tooltip');
const maxBarHeight = 120;

const currentDate = new Date().getDate();
const dateIndex = currentDate !== 0 ? currentDate - 1 : 6;

const fetchData = async () => {
    try {
        const res = await fetch('./data.json');
        const data = await res.json();
        const maxAmount = Math.max(...data.map((ele) => ele.amount));
        data.forEach((ele, idx) => {
            const amount = ele.amount;
            const height = Math.round((amount / maxAmount) * maxBarHeight);

            if (maxAmount === amount) {
                idMax = idx;
                bars[idMax].style.backgroundColor = 'hsl(186, 34%, 60%)';
            }

            tooltips[idx].textContent = `$${amount}`;
            tooltips[idx].style.bottom = `calc(${height}px + 10px)`;
            bars[idx].style.height = `${Math.round((amount / maxAmount) * maxBarHeight)}px`;

        });

    } catch (err) {
        console.log(err);
    }
};

fetchData();