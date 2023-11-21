# Define the card counting function for Blackjack as described in the user's screenshot.

def cc(card):
    # This is a simplified version of the function that might not cover all edge cases.
    
    # Initialize a global variable for the count.
    global count
    # Card values that correspond to count changes.
    card_values = {'2': 1, '3': 1, '4': 1, '5': 1, '6': 1,
                   '7': 0, '8': 0, '9': 0, '10': -1, 'J': -1, 'Q': -1, 'K': -2, 'A': -2}

    # Convert card to a string if it's a number.
    card = str(card)
    
    # Update the count.
    count += card_values.get(card, 0)  # Default to 0 if card is not found.
    
    # Return the current count and the betting advice.
    if count > 0:
        return f"{count} Bet"
    else:
        return f"{count} Hold"

# # Initialize the count to 0.
# count = 0

# # Example usage:
# # The count will start at 0 and change as cards are inputted.
# results = [cc('K'), cc('A'), cc('9'), cc('2'), cc('7')]
# results

# Let's calculate the final return value after the function calls provided in the user's new screenshot.

# Reset the count to 0 before calculating the new series of cards.
count = 0

# Series 1: cc(5), cc(6), cc(7), cc(4), cc(A), cc(2), cc(3)
series_1_result = [cc(5), cc(6), cc(7), cc(4), cc('A'), cc(2), cc(3)]

# Reset the count again to 0 for the second series of cards.
count = 0

# Series 2: cc(3), cc(4), cc(5), cc(10), cc('A'), cc('K')
series_2_result = [cc(3), cc(4), cc(5), cc(10), cc('A'), cc('K')]

print((series_1_result[-1], series_2_result[-1]))
