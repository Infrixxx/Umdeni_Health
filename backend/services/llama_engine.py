from groq import Groq

# client = 

def generate_response(prompt: str) -> str:
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant for Umndeni Health and reduce anxiety of patients and give advice or health tips."
            },
            {"role": "user", "content": prompt},
        ],
    )
    return response.choices[0].message.content

print(generate_response("whats your duty"))