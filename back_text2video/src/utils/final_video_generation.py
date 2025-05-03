# import cv2
# from moviepy.editor import *
# import os

# def zoom_in(image, duration, fps, size):
#     try:
#         frames = []
#         h, w = image.shape[:2]
#         for i in range(int(duration * fps)):
#             scale = 1 + (i / (duration * fps) * 0.5)
#             center = (w // 2, h // 2)
#             matrix = cv2.getRotationMatrix2D(center, 0, scale)
#             frame = cv2.warpAffine(image, matrix, (w, h))
#             frames.append(cv2.resize(frame, size))
#         return frames
#     except Exception as e:
#         raise ValueError(f"Error in zoom_in function: {e}")

# def zoom_out(image, duration, fps, size):
#     try:
#         frames = []
#         h, w = image.shape[:2]
#         for i in range(int(duration * fps)):
#             scale = 1 + ((duration * fps - i) / (duration * fps) * 0.5)
#             center = (w // 2, h // 2)
#             matrix = cv2.getRotationMatrix2D(center, 0, scale)
#             frame = cv2.warpAffine(image, matrix, (w, h))
#             frames.append(cv2.resize(frame, size))
#         return frames
#     except Exception as e:
#         raise ValueError(f"Error in zoom_out function: {e}")

# def create_video(image_files, display_durations, size=(1080, 1920), fps=30):
#     try:
#         images = [cv2.resize(cv2.imread(img), size) for img in image_files]
#         clips = []
#         for i in range(len(images)):
#             img = images[i]
#             display_duration = display_durations[i]
#             if i % 2 == 0:
#                 zoom_frames = zoom_in(img, display_duration, fps, size)
#             else:
#                 zoom_frames = zoom_out(img, display_duration, fps, size)

#             # Convert frames to video clips
#             frames_clips = [ImageSequenceClip([cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)], fps=fps) for frame in zoom_frames]
#             clip = concatenate_videoclips(frames_clips)
#             clips.append(clip)

#         # Combine all video clips into one video
#         video_clip = concatenate_videoclips(clips, method="compose")
#         return video_clip
#     except Exception as e:
#         raise ValueError(f"Error in create_video function: {e}")

# def load_images_and_voices(images_root_folder, voices_root_folder):
#     try:
#         # Debugging prints
#         print(f"Loading images from: {images_root_folder}")
#         print(f"Loading voices from: {voices_root_folder}")
        
#         if not isinstance(images_root_folder, str) or not isinstance(voices_root_folder, str):
#             raise ValueError("Image and voice folder paths should be strings.")

#         images = sorted([os.path.join(images_root_folder, img) for img in os.listdir(images_root_folder)])
#         voices = sorted([os.path.join(voices_root_folder, voice) for voice in os.listdir(voices_root_folder) if voice.endswith('.mp3')])
#         return images, voices
#     except Exception as e:
#         raise ValueError(f"Error in load_images_and_voices function: {e}")

# def combineAudioImages(images_subfolder, voices_subfolder, sceneList):
#     try:
#         images_root_folder = images_subfolder
#         voices_root_folder = voices_subfolder

#         # Debugging prints
#         print(f"Images folder: {images_root_folder}")
#         print(f"Voices folder: {voices_root_folder}")

#         if not isinstance(images_root_folder, str) or not isinstance(voices_root_folder, str):
#             raise ValueError("Image and voice folder paths should be strings.")

#         images, voices = load_images_and_voices(images_root_folder, voices_root_folder)
        
#         # Calculate display durations from audio files
#         display_durations = []
#         for file_path in voices:
#             try:
#                 audio = AudioFileClip(file_path)
#                 duration_sec = audio.duration
#                 display_durations.append(duration_sec)
#             except Exception as e:
#                 print(f"Error processing {file_path}: {e}")
        
#         video_clip = create_video(images, display_durations)
        
#         # Combine audio files into one
#         audio_clips = [AudioFileClip(path) for path in voices]
#         combined_audio = concatenate_audioclips(audio_clips)
        
#         if combined_audio.duration > video_clip.duration:
#             combined_audio = combined_audio.subclip(0, video_clip.duration)

#         # Set audio to video
#         first_scene_title = sceneList[0]["title"].replace(" ", "_").replace(":", "").replace("/", "_")  
#         video_filename = f"{first_scene_title}.mp4"
#         final_clip = video_clip.set_audio(combined_audio)
#         final_clip.write_videofile(video_filename)

#         print(f"Combined video file created: {video_filename}")
#         return f"Video successfully created {video_filename}"
#     except Exception as e:
#         raise ValueError(f"Error in combineAudioImages function: {e}")





import cv2
from moviepy.editor import *
import os

def zoom_in(image, duration, fps, size):
    try:
        frames = []
        h, w = image.shape[:2]
        for i in range(int(duration * fps)):
            scale = 1 + (i / (duration * fps) * 0.5)
            center = (w // 2, h // 2)
            matrix = cv2.getRotationMatrix2D(center, 0, scale)
            frame = cv2.warpAffine(image, matrix, (w, h))
            frames.append(cv2.resize(frame, size))
        return frames
    except Exception as e:
        raise ValueError(f"Error in zoom_in function: {e}")

def zoom_out(image, duration, fps, size):
    try:
        frames = []
        h, w = image.shape[:2]
        for i in range(int(duration * fps)):
            scale = 1 + ((duration * fps - i) / (duration * fps) * 0.5)
            center = (w // 2, h // 2)
            matrix = cv2.getRotationMatrix2D(center, 0, scale)
            frame = cv2.warpAffine(image, matrix, (w, h))
            frames.append(cv2.resize(frame, size))
        return frames
    except Exception as e:
        raise ValueError(f"Error in zoom_out function: {e}")

def create_video(image_files, display_durations, size=(1080, 1920), fps=30):
    try:
        images = [cv2.resize(cv2.imread(img), size) for img in image_files]
        clips = []
        for i in range(len(images)):
            img = images[i]
            display_duration = display_durations[i]
            if i % 2 == 0:
                zoom_frames = zoom_in(img, display_duration, fps, size)
            else:
                zoom_frames = zoom_out(img, display_duration, fps, size)

            # Convert frames to video clips
            frames_clips = [ImageSequenceClip([cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)], fps=fps) for frame in zoom_frames]
            clip = concatenate_videoclips(frames_clips)
            clips.append(clip)

        # Combine all video clips into one video
        video_clip = concatenate_videoclips(clips, method="compose")
        return video_clip
    except Exception as e:
        raise ValueError(f"Error in create_video function: {e}")

def load_images_and_voices(images_root_folder, voices_root_folder):
    try:
        # Ensure paths are strings
        if not isinstance(images_root_folder, str) or not isinstance(voices_root_folder, str):
            raise ValueError("Image and voice folder paths should be strings.")
        
        images = sorted([os.path.join(images_root_folder, img) for img in os.listdir(images_root_folder)])
        voices = sorted([os.path.join(voices_root_folder, voice) for voice in os.listdir(voices_root_folder) if voice.endswith('.mp3')])
        return images, voices
    except Exception as e:
        raise ValueError(f"Error in load_images_and_voices function: {e}")

def combineAudioImages(images_subfolder, voices_subfolder, sceneList):
    try:
        # Ensure paths are strings
        if not isinstance(images_subfolder, str) or not isinstance(voices_subfolder, str):
            raise ValueError(f"Image and voice folder paths should be strings.{images_subfolder},{voices_subfolder}")

        images_root_folder = images_subfolder
        voices_root_folder = voices_subfolder
        
        images, voices = load_images_and_voices(images_root_folder, voices_root_folder)
        
        # Calculate display durations from audio files
        display_durations = []
        for file_path in voices:
            try:
                audio = AudioFileClip(file_path)
                duration_sec = audio.duration
                display_durations.append(duration_sec)
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
        
        video_clip = create_video(images, display_durations)
        
        # Combine audio files into one
        audio_clips = [AudioFileClip(path) for path in voices]
        combined_audio = concatenate_audioclips(audio_clips)
        
        if combined_audio.duration > video_clip.duration:
            combined_audio = combined_audio.subclip(0, video_clip.duration)

        # Set audio to video
        first_scene_title = sceneList[0]["title"].replace(" ", "_").replace(":", "").replace("/", "_")  
        video_filename = f"{first_scene_title}.mp4"
        final_clip = video_clip.set_audio(combined_audio)
        final_clip.write_videofile(video_filename)

        print(f"Combined video file created: {video_filename}")
        return f"video successfully created {video_filename}"
    except Exception as e:
        raise ValueError(f"Error in combineAudioImages function: {e}")
