
#include <iostream> // Include the iostream library for input and output
#include <string>   // Include the string library for using strings

using namespace std; // Use the standard namespace

// Function to greet the user
void greetUser(const string& name, int age) {
    cout << "Hello, " << name << "!" << endl;
    cout << "You are " << age << " years old." << endl;
}

int main() {
    string name; // Variable to store the user's name
    int age;     // Variable to store the user's age

    // Ask for the user's name
    cout << "Enter your name: ";
    getline(cin, name); // Use getline to allow for spaces in the name

    // Ask for the user's age
    cout << "Enter your age: ";
    cin >> age; // Get user input for age

    // Check if the age is a valid number
    if (age < 0) {
        cout << "Please enter a valid age." << endl;
        return 1; // Return an error code
    }

    // Call the function to greet the user
    greetUser(name, age);

    return 0; // Indicate that the program ended successfully
}