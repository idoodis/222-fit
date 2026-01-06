# Results Images Guide

## Where to Place Your Results Images

Place your results/transformation images in the **`public/results/`** folder.

### Folder Structure

```
public/
  └── results/
      ├── result-1.png
      ├── result-2.png
      ├── result-3.png
      ├── result-4.png
      ├── result-5.png
      └── result-6.png
```

### Image Naming Convention

Name your images following this pattern:
- `result-1.png` (or `.jpg`, `.jpeg`, `.webp`)
- `result-2.png`
- `result-3.png`
- etc.

### Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### How to Add Images

1. Create the `results` folder inside `public/` if it doesn't exist:
   ```
   public/results/
   ```

2. Add your images to this folder with the naming convention above.

3. The website will automatically display them in the Results Gallery section on the homepage.

### Image Recommendations

- **Aspect Ratio**: Square (1:1) works best, but the gallery will crop to fit
- **File Size**: Optimize images for web (recommended: under 500KB each)
- **Dimensions**: Recommended minimum 800x800px for good quality
- **Content**: Before/after photos, transformation photos, or client success photos

### Adding More or Fewer Images

To change the number of images displayed, edit `app/page.tsx` and modify the `images` array in the `ResultsGallery` component:

```tsx
<ResultsGallery
  images={[
    "/results/result-1.png",
    "/results/result-2.png",
    "/results/result-3.png",
    // Add or remove image paths here
  ]}
/>
```

### Notes

- If an image doesn't exist, a placeholder will be shown instead
- Images are automatically optimized by Next.js for better performance
- The gallery displays images in a responsive 3-column grid (1 column on mobile)


