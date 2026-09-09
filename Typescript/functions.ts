function function_name(param1: number): number {
    return param1;
}

function say_my_name(name: string): void {
    console.log(name);
}

function greet_me(name: string, greeting?: string): string {
    if (greeting === undefined) {
        greeting = "Hello";
    }

    return greeting + ", " + name;
}

console.log(greet_me("Artur", "Tere"));