

function get_random_system_outcome() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
function is_round_winner_player(player, csystem) {
    return (
        (player === "rock" && csystemsystem === "scissors") ||
        (player === "scissors" && csystemsystem === "paper") ||
        (player === "paper" && csystem === "rock")
    );
}


