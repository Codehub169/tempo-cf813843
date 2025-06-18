export const usageData = [
    {
        name: "ls",
        description: "List directory contents.",
        examples: [
            {
                comment: "# List files in the current directory",
                command: "ls",
                output: "Documents  Downloads  Music  Pictures  Videos"
            },
            {
                comment: "# List all files, including hidden ones, in long format",
                command: "ls -la",
                output: "drwxr-xr-x 1 user user 4096 Oct 26 10:00 .\ndrwxr-xr-x 1 user user 4096 Oct 25 09:00 ..\n-rw-r--r-- 1 user user  220 Oct 25 09:00 .bash_logout"
            }
        ]
    },
    {
        name: "cd",
        description: "Change the current directory.",
        examples: [
            {
                comment: "# Navigate into the 'Documents' directory",
                command: "cd Documents"
            },
            {
                comment: "# Go back to the parent directory",
                prompt: "~/Documents$",
                command: "cd .."
            },
            {
                comment: "# Go to your home directory",
                prompt: "/some/other/path$",
                command: "cd"
            }
        ]
    },
    {
        name: "pwd",
        description: "Print the name of the current working directory.",
        examples: [
            {
                prompt: "~/Documents/Projects$",
                command: "pwd",
                output: "/home/user/Documents/Projects"
            }
        ]
    },
    {
        name: "mkdir",
        description: "Make directories.",
        examples: [
            {
                comment: "# Create a new directory named 'new-project'",
                command: "mkdir new-project"
            },
            {
                comment: "# Create nested directories",
                command: "mkdir -p path/to/my/app"
            }
        ]
    },
    {
        name: "cat",
        description: "Concatenate and display files.",
        examples: [
            {
                comment: "# Display the content of a file",
                command: "cat readme.txt",
                output: "Hello, this is a readme file.\nIt contains important information."
            }
        ]
    },
    {
        name: "sudo",
        description: "Execute a command as another user (typically the superuser).",
        examples: [
            {
                comment: "# Install a package using the system's package manager",
                command: "sudo apt-get install htop",
                output: "[sudo] password for user: ********"
            }
        ]
    }
];
