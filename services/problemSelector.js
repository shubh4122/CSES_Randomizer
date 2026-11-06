export function getRandomProblem(problems, selectedTopics, selectedStatuses) {

    // console.log('getRandomProblem called with:', problems, selectedTopics, selectedStatuses);


    // Keep only enabled topics and selected statuses.
    const filtered = problems.filter(problem =>
        selectedTopics.includes(problem.topic) &&
        selectedStatuses.includes(problem.status)
    );

    // console.log('Filtered problems:', filtered);

    // Group problems by topic while preserving their original order.
    const topics = [...new Set(filtered.map(problem => problem.topic))];

    // console.log('Filtered topics:', topics);

    if (!topics.length) return null;

    // Randomly select one eligible topic.
    const topic = topics[Math.floor(Math.random() * topics.length)];

    // console.log('Selected topic:', topic);

    // Return the first eligible problem in that topic. - ONLY IF UNSOLVED QUESTIONS required
    if (!selectedStatuses.includes('Solved'))
        return filtered.find(problem => problem.topic === topic);

    //else - Run this if Unsolved + Solved/Solved questions required - Get any random problem from that topic.
    // Get all problems belonging to the randomly selected topic.
    const topicProblems = filtered.filter(problem => problem.topic === topic);

    // Select a random problem from those problems.
    const randomIndex = Math.floor(Math.random() * topicProblems.length);

    return topicProblems[randomIndex];
}