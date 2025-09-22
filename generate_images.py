from itertools import product
from os.path import join

import matplotlib.patches as patches
import matplotlib.pyplot as plt

def draw_empty_reminder():
    fig, ax = plt.subplots(figsize=(8, 2))
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 2)
    ax.set_aspect('equal')
    ax.axis('off')

    # Background rectangle
    background = patches.Rectangle((0, 0), 10, 2, linewidth=2, edgecolor='black', facecolor='#d2a679')
    ax.add_patch(background)

    plt.savefig(join("images", "background_only.png"))


def draw_reminder(colors):
    """
    Draws up to 5 rounded rectangles in a row.
    Fills the first N boxes with the given colors (as circles),
    leaves the rest empty.

    Parameters:
        colors (list of str): List of color names (length N <= 5).
    """
    N = min(len(colors), 5)  # max 5
    fig, ax = plt.subplots(figsize=(8, 2))
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 2)
    ax.set_aspect('equal')
    ax.axis('off')

    # Background rectangle
    background = patches.Rectangle((0, 0), 10, 2, linewidth=2,
                                   edgecolor='black', facecolor='#d2a679')
    ax.add_patch(background)

    # Draw N boxes
    for i in range(N):
        x = 1.5 + i * 1.8
        rect = patches.FancyBboxPatch((x-0.6, 0.4), 1.2, 1.2,
                                      boxstyle="round,pad=0.1,rounding_size=0.2",
                                      linewidth=2, edgecolor="black", facecolor="#f4d7b8")
        ax.add_patch(rect)

        # Only draw circles for provided colors
        if i < N:
            circle = patches.Circle((x, 1.0), 0.45,
                                    facecolor=colors[i], edgecolor="black")
            ax.add_patch(circle)

    plt.savefig(join("images", "_".join(colors) + ".png"))
    plt.close()

def draw_single_circle(color, radius=0.5):
    """
    Draw a single circle of the given color with no background or border boxes.

    Parameters:
        color (str): Color of the circle (e.g. "red", "#FF00FF").
        radius (float): Radius of the circle (default = 0.5).
    """
    fig, ax = plt.subplots(figsize=(2, 2))
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_aspect('equal')
    ax.axis('off')

    circle = patches.Circle((0, 0), radius, facecolor=color, edgecolor="black")
    ax.add_patch(circle)

    plt.savefig(join("images", "one_" + color + "_marble.png"))

def generate_all_reminder_images():
    NUM_TRIALS = 5
    contrasts = [("blue", "yellow"),
                ("green", "red"),
                ("red", "pink"),
                ("orange", "purple")]

    for contrast in contrasts:
        for length in range(1, NUM_TRIALS + 1):
            spec = list(product(contrast, repeat=length))
            # print(spec)
            for seq in spec:
                draw_reminder(seq)

def generate_single_marble_images():
    colors = ["blue", "yellow",
              "green", "red",
              "red", "pink",
              "orange", "purple"]

    for color in colors:
        draw_single_circle(color)

# generate_single_marble_images()
