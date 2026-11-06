export function extractProblems() {
    const container = document.querySelector('#cses-problem-column');

    if (!container) return [];

    const problems = [];

    // Each topic consists of an h2 followed by its task list.
    container.querySelectorAll('h2').forEach((heading) => {

        const topic = heading.firstChild.textContent.trim();

        const list = heading.nextElementSibling;

        if (!list?.matches('ul.task-list')) return;

        // Extract individual problems from this topic.
        list.querySelectorAll('li.task').forEach((item) => {
            const link = item.querySelector('a[href^="/problemset/task/"]');

            if (!link) return;

            const id = link.href.match(/\/task\/(\d+)/)?.[1];//regex to get the problem id

            if (!id) return;//this will also ensure we don't take the GENERAL section, which doesn't match the above regex

            // CSES adds the "full" class to solved problems.
            const solved = !!item.querySelector('.task-score.icon.full'); // !! converts a value into a boolean. It doesn't simply nullify it.

            problems.push({
                id,
                name: link.textContent.trim(),
                topic,
                url: link.href,
                status: solved ? 'Solved' : 'Unsolved'
            });
        });
    });

    return problems;
}