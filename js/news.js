
fetch('articles/articles.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('news-container');
    if (!container) return;
    const currentYear = new Date().getFullYear();
    let lastYear = currentYear;

    data.forEach((article, index) => {
      const date = new Date(article.date);
      const year = date.getFullYear();

      if (year !== lastYear) {
        const divider = document.createElement('h2');
        divider.textContent = year;
        divider.className = 'divider text-3xl font-bold mt-12 mb-6';
        container.appendChild(divider);
        lastYear = year;
      }

      const link = document.createElement('a');
      link.href = `articles/${article.file}`;
      link.className = index === 0
        ? 'top-story block mb-10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1'
        : 'block mb-10 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1';

      const imgEl = `<img src="${article.image || 'placeholder.jpg'}" alt="${article.title}" class="${index===0 ? 'w-full md:w-1/2 object-cover' : 'col-span-1 object-cover'}">`;
      const textEl = `
        <div class="${'p-6 col-span-2'}">
          <span class="text-xs uppercase tracking-wider text-gray-500">${article.category}</span>
          <h3 class="text-2xl font-bold mb-2">${article.title}</h3>
          <p class="text-gray-600 mb-4">${article.summary}</p>
          <time class="text-sm text-gray-400">${article.date}</time>
        </div>
      `;
      link.innerHTML = index === 0 ? `<div class="flex flex-col md:flex-row-reverse">${imgEl}${textEl}</div>` : `${imgEl}${textEl}`;
      container.appendChild(link);
    });
  })
  .catch(err => console.error('Failed to load articles:', err));
