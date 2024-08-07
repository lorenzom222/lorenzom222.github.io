# Chapter 1: Introduction to Neovim

## What is Neovim?
Neovim is a modernized version of the classic Vim text editor, designed to be more extensible and user-friendly. It aims to improve upon Vim by providing better performance, more powerful features, and a more flexible architecture. Neovim retains the core functionality of Vim, making it familiar to existing Vim users while offering enhancements that appeal to new users.

## Differences between Vim and Neovim
- **Extensibility**: Neovim has a built-in terminal emulator and supports asynchronous plugins, allowing for more advanced and responsive extensions.
- **Configuration**: Neovim uses a more modern configuration file (`init.vim` or `init.lua`), which can be easier to manage and customize.
- **Performance**: Neovim is designed to be faster and more efficient, with improvements in memory usage and startup time.
- **Community and Development**: Neovim has an active and growing community, with frequent updates and contributions from developers around the world.

## Installing Neovim
1. **Windows**:
   - Download the installer from the [Neovim releases page](https://github.com/neovim/neovim/releases).
   - Run the installer and follow the instructions.

2. **macOS**:
   - Use Homebrew: `brew install neovim`
   - Alternatively, download the pre-built binary from the [Neovim releases page](https://github.com/neovim/neovim/releases).

3. **Linux**:
   - Use your package manager (e.g., `sudo apt install neovim` for Debian-based systems).
   - Alternatively, download the pre-built binary from the [Neovim releases page](https://github.com/neovim/neovim/releases).

# Chapter 2: Basic Usage

## Opening and Closing Files
- **Opening a file**: Use the command `nvim filename` to open a file in Neovim.
- **Closing a file**: Use the command `:q` to quit Neovim. If you have unsaved changes, use `:q!` to quit without saving.

## Basic Navigation
- **Moving the cursor**:
  - `h`: Move left
  - `j`: Move down
  - `k`: Move up
  - `l`: Move right
- **Jumping to a specific line**: Use `:linenumber` (e.g., `:10` to jump to line 10).

## Editing Text
- **Insert mode**: Press `i` to enter Insert mode and start typing.
- **Normal mode**: Press `Esc` to return to Normal mode.
- **Deleting text**: Use `x` to delete a character, `dd` to delete a line, and `d` followed by a motion command (e.g., `dw` to delete a word).

## Saving Changes
- **Save the current file**: Use the command `:w`.
- **Save and quit**: Use the command `:wq`.
- **Quit without saving**: Use the command `:q!`.
