# Community Nodes

These are nodes that have been developed by the community, for the community. If you're not sure what a node is, you can learn more about nodes [here](overview.md).

If you'd like to submit a node for the community, please refer to the [node creation overview](contributingNodes.md).

To use a node, add the node to the `nodes` folder found in your InvokeAI install location. 

The suggested method is to use `git clone` to clone the repository the node is found in. This allows for easy updates of the node in the future. 

If you'd prefer, you can also just download the whole node folder from the linked repository and add it to the `nodes` folder. 

To use a community workflow, download the the `.json` node graph file and load it into Invoke AI via the **Load Workflow** button in the Workflow Editor. 

- Community Nodes
    + [Average Images](#average-images)
    + [Depth Map from Wavefront OBJ](#depth-map-from-wavefront-obj)
    + [Film Grain](#film-grain)
    + [Generative Grammar-Based Prompt Nodes](#generative-grammar-based-prompt-nodes)
    + [GPT2RandomPromptMaker](#gpt2randompromptmaker)
    + [Grid to Gif](#grid-to-gif)
    + [Halftone](#halftone)
    + [Ideal Size](#ideal-size)
    + [Image and Mask Composition Pack](#image-and-mask-composition-pack)
    + [Image to Character Art Image Nodes](#image-to-character-art-image-nodes)
    + [Image Picker](#image-picker)
    + [Load Video Frame](#load-video-frame)
    + [Make 3D](#make-3d)
    + [Match Histogram](#match-histogram)
    + [Oobabooga](#oobabooga)
    + [Prompt Tools](#prompt-tools)
    + [Remote Image](#remote-image)
    + [Retroize](#retroize)
    + [Size Stepper Nodes](#size-stepper-nodes)
    + [Text font to Image](#text-font-to-image)
    + [Thresholding](#thresholding)
    + [Unsharp Mask](#unsharp-mask)
    + [XY Image to Grid and Images to Grids nodes](#xy-image-to-grid-and-images-to-grids-nodes)
- [Example Node Template](#example-node-template)
- [Disclaimer](#disclaimer)
- [Help](#help)


--------------------------------
### Average Images

**Description:** This node takes in a collection of images of the same size and averages them as output. It converts everything to RGB mode first.

**Node Link:** https://github.com/JPPhoto/average-images-node

--------------------------------
### Depth Map from Wavefront OBJ

**Description:** Render depth maps from Wavefront .obj files (triangulated) using this simple 3D renderer utilizing numpy and matplotlib to compute and color the scene. There are simple parameters to change the FOV, camera position, and model orientation.

To be imported, an .obj must use triangulated meshes, so make sure to enable that option if exporting from a 3D modeling program. This renderer makes each triangle a solid color based on its average depth, so it will cause anomalies if your .obj has large triangles. In Blender, the Remesh modifier can be helpful to subdivide a mesh into small pieces that work well given these limitations.

**Node Link:** https://github.com/dwringer/depth-from-obj-node

**Example Usage:**
</br><img src="https://raw.githubusercontent.com/dwringer/depth-from-obj-node/main/depth_from_obj_usage.jpg" width="500" />

--------------------------------
### Film Grain

**Description:** This node adds a film grain effect to the input image based on the weights, seeds, and blur radii parameters. It works with RGB input images only.

**Node Link:** https://github.com/JPPhoto/film-grain-node

--------------------------------
### Generative Grammar-Based Prompt Nodes

**Description:** This set of 3 nodes generates prompts from simple user-defined grammar rules (loaded from custom files - examples provided below). The prompts are made by recursively expanding a special template string, replacing nonterminal "parts-of-speech" until no nonterminal terms remain in the string.

This includes 3 Nodes:
- *Lookup Table from File* - loads a YAML file "prompt" section (or of a whole folder of YAML's) into a JSON-ified dictionary (Lookups output)
- *Lookups Entry from Prompt* - places a single entry in a new Lookups output under the specified heading
- *Prompt from Lookup Table* - uses a Collection of Lookups as grammar rules from which to randomly generate prompts.

**Node Link:** https://github.com/dwringer/generative-grammar-prompt-nodes

**Example Usage:**
</br><img src="https://raw.githubusercontent.com/dwringer/generative-grammar-prompt-nodes/main/lookuptables_usage.jpg" width="500" />

--------------------------------
### GPT2RandomPromptMaker

**Description:** A node for InvokeAI utilizes the GPT-2 language model to generate random prompts based on a provided seed and context.

**Node Link:** https://github.com/mickr777/GPT2RandomPromptMaker

**Output Examples** 

Generated Prompt: An enchanted weapon will be usable by any character regardless of their alignment.

<img src="https://github.com/mickr777/InvokeAI/assets/115216705/8496ba09-bcdd-4ff7-8076-ff213b6a1e4c" width="200" />

--------------------------------
### Grid to Gif

**Description:** One node that turns a grid image into an image collection, one node that turns an image collection into a gif.

**Node Link:** https://github.com/mildmisery/invokeai-GridToGifNode/blob/main/GridToGif.py

**Example Node Graph:**  https://github.com/mildmisery/invokeai-GridToGifNode/blob/main/Grid%20to%20Gif%20Example%20Workflow.json

**Output Examples** 

<img src="https://raw.githubusercontent.com/mildmisery/invokeai-GridToGifNode/main/input.png" width="300" />
<img src="https://raw.githubusercontent.com/mildmisery/invokeai-GridToGifNode/main/output.gif" width="300" />

--------------------------------
### Halftone

**Description**: Halftone converts the source image to grayscale and then performs halftoning. CMYK Halftone converts the image to CMYK and applies a per-channel halftoning to make the source image look like a magazine or newspaper. For both nodes, you can specify angles and halftone dot spacing.

**Node Link:** https://github.com/JPPhoto/halftone-node

**Example**

Input:

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/fd5efb9f-4355-4409-a1c2-c1ca99e0cab4" width="300" />

Halftone Output:

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/7e606f29-e68f-4d46-b3d5-97f799a4ec2f" width="300" />

CMYK Halftone Output:

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/c59c578f-db8e-4d66-8c66-2851752d75ea" width="300" />

--------------------------------
### Ideal Size

**Description:** This node calculates an ideal image size for a first pass of a multi-pass upscaling. The aim is to avoid duplication that results from choosing a size larger than the model is capable of.

**Node Link:** https://github.com/JPPhoto/ideal-size-node

--------------------------------
### Image and Mask Composition Pack

**Description:** This is a pack of nodes for composing masks and images, including a simple text mask creator and both image and latent offset nodes. The offsets wrap around, so these can be used in conjunction with the Seamless node to progressively generate centered on different parts of the seamless tiling.

This includes 15 Nodes:

- *Adjust Image Hue Plus* - Rotate the hue of an image in one of several different color spaces.
- *Blend Latents/Noise (Masked)* - Use a mask to blend part of one latents tensor [including Noise outputs] into another. Can be used to "renoise" sections during a multi-stage [masked] denoising process.
- *Enhance Image* - Boost or reduce color saturation, contrast, brightness, sharpness, or invert colors of any image at any stage with this simple wrapper for pillow [PIL]'s ImageEnhance module.
- *Equivalent Achromatic Lightness* - Calculates image lightness accounting for Helmholtz-Kohlrausch effect based on a method described by High, Green, and Nussbaum (2023).
- *Text to Mask (Clipseg)* - Input a prompt and an image to generate a mask representing areas of the image matched by the prompt.
- *Text to Mask Advanced (Clipseg)* - Output up to four prompt masks combined with logical "and", logical "or", or as separate channels of an RGBA image.
- *Image Layer Blend* - Perform a layered blend of two images using alpha compositing. Opacity of top layer is selectable, with optional mask and several different blend modes/color spaces.
- *Image Compositor* - Take a subject from an image with a flat backdrop and layer it on another image using a chroma key or flood select background removal.
- *Image Dilate or Erode* - Dilate or expand a mask (or any image!). This is equivalent to an expand/contract operation.
- *Image Value Thresholds* - Clip an image to pure black/white beyond specified thresholds.
- *Offset Latents* - Offset a latents tensor in the vertical and/or horizontal dimensions, wrapping it around.
- *Offset Image* - Offset an image in the vertical and/or horizontal dimensions, wrapping it around.
- *Rotate/Flip Image* - Rotate an image in degrees clockwise/counterclockwise about its center, optionally resizing the image boundaries to fit, or flipping it about the vertical and/or horizontal axes.
- *Shadows/Highlights/Midtones* - Extract three masks (with adjustable hard or soft thresholds) representing shadows, midtones, and highlights regions of an image.
- *Text Mask (simple 2D)* - create and position a white on black (or black on white) line of text using any font locally available to Invoke.

**Node Link:** https://github.com/dwringer/composition-nodes
  
</br><img src="https://raw.githubusercontent.com/dwringer/composition-nodes/main/composition_pack_overview.jpg" width="500" />

--------------------------------
### Image to Character Art Image Nodes

**Description:** Group of nodes to convert an input image into ascii/unicode art Image

**Node Link:** https://github.com/mickr777/imagetoasciiimage

**Output Examples**

<img src="https://user-images.githubusercontent.com/115216705/271817646-8e061fcc-9a2c-4fa9-bcc7-c0f7b01e9056.png" width="300" /><img src="https://github.com/mickr777/imagetoasciiimage/assets/115216705/3c4990eb-2f42-46b9-90f9-0088b939dc6a" width="300" /></br>
<img src="https://github.com/mickr777/imagetoasciiimage/assets/115216705/fee7f800-a4a8-41e2-a66b-c66e4343307e" width="300" />
<img src="https://github.com/mickr777/imagetoasciiimage/assets/115216705/1d9c1003-a45f-45c2-aac7-46470bb89330" width="300" />

--------------------------------

### Image Picker

**Description:** This InvokeAI node takes in a collection of images and randomly chooses one. This can be useful when you have a number of poses to choose from for a ControlNet node, or a number of input images for another purpose.

**Node Link:** https://github.com/JPPhoto/image-picker-node

--------------------------------
### Load Video Frame

**Description:** This is a video frame image provider + indexer/video creation nodes for hooking up to iterators and ranges and ControlNets and such for invokeAI node experimentation. Think animation + ControlNet outputs.

**Node Link:** https://github.com/helix4u/load_video_frame

**Output Example:** 
<img src="https://raw.githubusercontent.com/helix4u/load_video_frame/main/_git_assets/testmp4_embed_converted.gif" width="500" />

--------------------------------
### Make 3D

**Description:** Create compelling 3D stereo images from 2D originals.

**Node Link:** [https://gitlab.com/srcrr/shift3d/-/raw/main/make3d.py](https://gitlab.com/srcrr/shift3d)

**Example Node Graph:**  https://gitlab.com/srcrr/shift3d/-/raw/main/example-workflow.json?ref_type=heads&inline=false

**Output Examples** 

<img src="https://gitlab.com/srcrr/shift3d/-/raw/main/example-1.png" width="300" />
<img src="https://gitlab.com/srcrr/shift3d/-/raw/main/example-2.png" width="300" />

--------------------------------
### Match Histogram

**Description:** An InvokeAI node to match a histogram from one image to another.  This is a bit like the `color correct` node in the main InvokeAI but this works in the YCbCr colourspace and can handle images of different sizes. Also does not require a mask input.
- Option to only transfer luminance channel.
- Option to save output as grayscale

A good use case for this node is to normalize the colors of an image that has been through the tiled scaling workflow of my XYGrid Nodes. 

See full docs here: https://github.com/skunkworxdark/Prompt-tools-nodes/edit/main/README.md

**Node Link:** https://github.com/skunkworxdark/match_histogram

**Output Examples** 

<img src="https://github.com/skunkworxdark/match_histogram/assets/21961335/ed12f329-a0ef-444a-9bae-129ed60d6097" width="300" />

--------------------------------
### Oobabooga

**Description:** asks a local LLM running in Oobabooga's Text-Generation-Webui to write a prompt based on the user input.

**Link:** https://github.com/sammyf/oobabooga-node

**Example:**

"describe a new mystical  creature in its natural environment"

*can return*

"The mystical creature I am describing to you is called the "Glimmerwing". It is a majestic, iridescent being that inhabits the depths of the most enchanted forests and glimmering lakes. Its body is covered in shimmering scales that reflect every color of the rainbow, and it has delicate, translucent wings that sparkle like diamonds in the sunlight. The Glimmerwing's home is a crystal-clear lake, surrounded by towering trees with leaves that shimmer like jewels. In this serene environment, the Glimmerwing spends its days swimming gracefully through the water, chasing schools of glittering fish and playing with the gentle ripples of the lake's surface.
As the sun sets, the Glimmerwing perches on a branch of one of the trees, spreading its wings to catch the last rays of light. The creature's scales glow softly, casting a rainbow of colors across the forest floor. The Glimmerwing sings a haunting melody, its voice echoing through the stillness of the night air. Its song is said to have the power to heal the sick and bring peace to troubled souls. Those who are lucky enough to hear the Glimmerwing's song are forever changed by its beauty and grace."

<img src="https://github.com/sammyf/oobabooga-node/assets/42468608/cecdd820-93dd-4c35-abbf-607e001fb2ed" width="300" />

**Requirement**

a Text-Generation-Webui instance (might work remotely too, but I never tried it) and obviously InvokeAI 3.x

**Note**

This node works best with SDXL models, especially as the style can be described independently of the LLM's output.

--------------------------------
### Prompt Tools 

**Description:** A set of InvokeAI nodes that add general prompt (string) manipulation tools.  Designed to accompany the `Prompts From File` node and other prompt generation nodes.

1. `Prompt To File` - saves a prompt or collection of prompts to a file. one per line. There is an append/overwrite option.
2. `PTFields Collect` - Converts image generation fields into a Json format string that can be passed to Prompt to file. 
3. `PTFields Expand` - Takes Json string and converts it to individual generation parameters. This can be fed from the Prompts to file node.
4. `Prompt Strength` - Formats prompt with strength like the weighted format of compel 
5. `Prompt Strength Combine` - Combines weighted prompts for .and()/.blend()
6. `CSV To Index String` - Gets a string from a CSV by index. Includes a Random index option

The following Nodes are now included in v3.2 of Invoke and are nolonger in this set of tools.<br>
- `Prompt Join` -> `String Join`
- `Prompt Join Three` -> `String Join Three`
- `Prompt Replace` -> `String Replace`
- `Prompt Split Neg` -> `String Split Neg`


See full docs here: https://github.com/skunkworxdark/Prompt-tools-nodes/edit/main/README.md

**Node Link:** https://github.com/skunkworxdark/Prompt-tools-nodes

**Workflow Examples** 

<img src="https://github.com/skunkworxdark/prompt-tools/blob/main/images/CSVToIndexStringNode.png" width="300" />

--------------------------------
### Remote Image

**Description:** This is a pack of nodes to interoperate with other services, be they public websites or bespoke local servers. The pack consists of these nodes:

- *Load Remote Image* - Lets you load remote images such as a realtime webcam image, an image of the day, or dynamically created images.
- *Post Image to Remote Server* - Lets you upload an image to a remote server using an HTTP POST request, eg for storage, display or further processing.

**Node Link:** https://github.com/fieldOfView/InvokeAI-remote_image


--------------------------------
### Retroize

**Description:** Retroize is a collection of nodes for InvokeAI to "Retroize" images. Any image can be given a fresh coat of retro paint with these nodes, either from your gallery or from within the graph itself. It includes nodes to pixelize, quantize, palettize, and ditherize images; as well as to retrieve palettes from existing images.

**Node Link:** https://github.com/Ar7ific1al/invokeai-retroizeinode/

**Retroize Output Examples**

<img src="https://github.com/Ar7ific1al/InvokeAI_nodes_retroize/assets/2306586/de8b4fa6-324c-4c2d-b36c-297600c73974" width="500" />

--------------------------------
### Size Stepper Nodes

**Description:** This is a set of nodes for calculating the necessary size increments for doing upscaling workflows. Use the *Final Size & Orientation* node to enter your full size dimensions and orientation (portrait/landscape/random), then plug that and your initial generation dimensions into the *Ideal Size Stepper* and get 1, 2, or 3 intermediate pairs of dimensions for upscaling. Note this does not output the initial size or full size dimensions: the 1, 2, or 3 outputs of this node are only the intermediate sizes.

A third node is included, *Random Switch (Integers)*, which is just a generic version of Final Size with no orientation selection.

**Node Link:** https://github.com/dwringer/size-stepper-nodes

**Example Usage:**
</br><img src="https://raw.githubusercontent.com/dwringer/size-stepper-nodes/main/size_nodes_usage.jpg" width="500" />

--------------------------------
### Text font to Image

**Description:** text font to text image node for InvokeAI, download a font to use (or if in font cache uses it from there), the text is always resized to the image size, but can control that with padding, optional 2nd line

**Node Link:** https://github.com/mickr777/textfontimage

**Output Examples**

<img src="https://github.com/mickr777/InvokeAI/assets/115216705/c21b0af3-d9c6-4c16-9152-846a23effd36" width="300" />

Results after using the depth controlnet

<img src="https://github.com/mickr777/InvokeAI/assets/115216705/915f1a53-968e-43eb-aa61-07cd8f1a733a" width="300" />
<img src="https://github.com/mickr777/InvokeAI/assets/115216705/821ef89e-8a60-44f5-b94e-471a9d8690cc" width="300" />
<img src="https://github.com/mickr777/InvokeAI/assets/115216705/2befcb6d-49f4-4bfd-b5fc-1fee19274f89" width="300" />

--------------------------------
### Thresholding

**Description:** This node generates masks for highlights, midtones, and shadows given an input image. You can optionally specify a blur for the lookup table used in making those masks from the source image.

**Node Link:** https://github.com/JPPhoto/thresholding-node

**Examples**

Input:

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/c88ada13-fb3d-484c-a4fe-947b44712632" width="300" />

Highlights/Midtones/Shadows:

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/727021c1-36ff-4ec8-90c8-105e00de986d" width="300" />
<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/0b721bfc-f051-404e-b905-2f16b824ddfe" width="300" />
<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/04c1297f-1c88-42b6-a7df-dd090b976286" width="300" />

Highlights/Midtones/Shadows (with LUT blur enabled):

<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/19aa718a-70c1-4668-8169-d68f4bd13771" width="300" />
<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/0a440e43-697f-4d17-82ee-f287467df0a5" width="300" />
<img src="https://github.com/invoke-ai/InvokeAI/assets/34005131/0701fd0f-2ca7-4fe2-8613-2b52547bafce" width="300" />

--------------------------------
### Unsharp Mask

**Description:** Applies an unsharp mask filter to an image, preserving its alpha channel in the process.

**Node Link:** https://github.com/JPPhoto/unsharp-mask-node

--------------------------------
### XY Image to Grid and Images to Grids nodes

**Description:** These nodes add the following to InvokeAI:
- Generate grids of images from multiple input images
- Create XY grid images with labels from parameters
- Split images into overlapping tiles for processing (for super-resolution workflows)
- Recombine image tiles into a single output image blending the seams 

The nodes include:
1. `Images To Grids` - Combine multiple images into a grid of images
2. `XYImage To Grid` - Take X & Y params and creates a labeled image grid.
3. `XYImage Tiles` - Super-resolution (embiggen) style tiled resizing
4. `Image Tot XYImages` - Takes an image and cuts it up into a number of columns and rows.
5. Multiple supporting nodes - Helper nodes for data wrangling and building `XYImage` collections

See full docs here: https://github.com/skunkworxdark/XYGrid_nodes/edit/main/README.md

**Node Link:** https://github.com/skunkworxdark/XYGrid_nodes

**Output Examples** 

<img src="https://github.com/skunkworxdark/XYGrid_nodes/blob/main/images/collage.png" width="300" />

--------------------------------
### Example Node Template

**Description:** This node allows you to do super cool things with InvokeAI.

**Node Link:** https://github.com/invoke-ai/InvokeAI/blob/main/invokeai/app/invocations/prompt.py

**Example Workflow:**  https://github.com/invoke-ai/InvokeAI/blob/docs/main/docs/workflows/Prompt_from_File.json

**Output Examples** 

</br><img src="https://invoke-ai.github.io/InvokeAI/assets/invoke_ai_banner.png" width="500" />


## Disclaimer

The nodes linked have been developed and contributed by members of the Invoke AI community. While we strive to ensure the quality and safety of these contributions, we do not guarantee the reliability or security of the nodes. If you have issues or concerns with any of the nodes below, please raise it on GitHub or in the Discord.


## Help
If you run into any issues with a node, please post in the [InvokeAI Discord](https://discord.gg/ZmtBAhwWhy). 

