import whisper
from summarizer.bert import Summarizer
import nltk
import warnings
from youtube_transcript_api import YouTubeTranscriptApi

warnings.filterwarnings("ignore")

def audio_transcript(file_path="test.mp3"):
    model = whisper.load_model("base")
    result = model.transcribe(file_path)
    text=result["text"]
    return text

def paragraph_chunker(paragraph, sentences_per_chunk=20):
    sentences = nltk.sent_tokenize(paragraph)
    chunks = []
    for i in range(0, len(sentences), sentences_per_chunk):
        chunk = sentences[i:i + sentences_per_chunk]
        chunks.append(' '.join(chunk))
    return chunks

def summarize(result):
    nltk.download('punkt')
    model = Summarizer()
    summary = []

    for i in result:
        summ_result = model(i,)
        summary.append(summ_result)

    summary = [i.replace("\n", " ") for i in summary]
    #add \n\n to each summary
    return "\n\n".join(summary)

def get_combined_transcript(video_id):
    try:
        # Get the transcript list for the video
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)

        # Select the first available transcript
        transcript = transcript_list.find_transcript(['en'])

        # Fetch the actual transcript data
        transcript_data = transcript.fetch()

        # Extract the text from each entry in the transcript
        transcript_text = '\n'.join(entry['text'] for entry in transcript_data)

        return transcript_text

    except Exception as e:
        print(f"Error: {e}")
        return None

def youtube_summary(url):
    video_id=url.split("=")[1]
    yt_transcript = get_combined_transcript(video_id)
    chunks=[]
    chunks = paragraph_chunker(yt_transcript)
    summary = summarize(chunks)
    return chunks,summary

def audio_summary(file_path="test.mp3"):
    transcript = audio_transcript()
    chunks=[]
    chunks = paragraph_chunker(transcript)
    summary = summarize(chunks)
    return chunks,summary

def convert_newlines_to_br(text):
    # Replace single newline with <br>
    text = text.replace('\n', '<br>')

    # Replace double newline with two <br>
    text = text.replace('\n\n', '<br><br>')

    return text
