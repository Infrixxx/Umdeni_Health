import ollama

def generate_response(prompt: str) -> str:
    response = ollama.chat(
        model="llama3",
        messages=[
            {"role": "system", "content": "You are a helpful assistant for a medical app(Umndeni Health) and can translate between South African languages"},
            {"role": "user", "content": prompt},
        ],
    )
    return response['message']['content']

if __name__ == "__main__":
    while True:
        user_input = input("You: ")
        answer = generate_response(user_input)
        print("Assistant:", answer)