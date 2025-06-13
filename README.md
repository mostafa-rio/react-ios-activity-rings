# iOS Activity Rings Component

A highly customizable React component that replicates the iOS Activity Rings with accurate styling and smooth animations.

![iOS Activity Rings](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ayGw7VGZwzP17UCawMy9Sh4bz2sZa4.png)

## Features

- ✅ Pixel-perfect recreation of iOS Activity Rings
- ✅ Smooth animations with customizable duration
- ✅ Responsive design that scales to any size
- ✅ 3D effect with gradients and shadows
- ✅ Fully customizable colors and progress values
- ✅ TypeScript support with proper type definitions

## Installation

    npm install ios-activity-rings

## Basic Usage


    import ActivityRings from 'ios-activity-rings';
    
    function MyComponent() {
      return (
        <ActivityRings 
          progress={[0.8, 0.6, 0.4]} 
          size={200} 
        />
      );
    }

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `progress` | `[number, number, number]` | Required | Progress values for each ring (0-1) |
| `size` | `number` | `150` | Size of the activity rings in pixels |
| `animationDuration` | `number` | `1` | Animation duration in seconds |
| `backgroundColor` | `string` | `"black"` | Background color of the component |

### progress

An array of three numbers between 0 and 1 representing the progress of each ring:
- Index 0: Outer ring (Move goal)
- Index 1: Middle ring (Exercise goal)
- Index 2: Inner ring (Stand goal)

\`\`\`jsx
// Example: Outer ring at 80%, middle at 60%, inner at 40%
<ActivityRings progress={[0.8, 0.6, 0.4]} />
\`\`\`

### size

The size of the component in pixels. The component is square, so this value represents both width and height.

    // Example: 200px x 200px
    <ActivityRings progress={[0.8, 0.6, 0.4]} size={200} />

### animationDuration

The duration of the ring fill animation in seconds.


    // Example: 2 second animation
    <ActivityRings progress={[0.8, 0.6, 0.4]} animationDuration={2} />

### backgroundColor

The background color of the component. Can be any valid CSS color value.


    // Example: Transparent background
    <ActivityRings progress={[0.8, 0.6, 0.4]} backgroundColor="transparent" />

## Advanced Usage

### Animating Progress Changes

The component automatically animates when progress values change:

    function ProgressExample() {
      const [progress, setProgress] = useState([0.3, 0.5, 0.7]);
      
      const updateProgress = () => {
        setProgress([0.8, 0.6, 0.4]);
      };
      
      return (
        <>
          <ActivityRings progress={progress} />
          <button onClick={updateProgress}>Update Progress</button>
        </>
      );
    }

### Custom Styling

You can customize the appearance by modifying the CSS variables or overriding the CSS classes:


    /* Override default styles */
    .activity-rings-container {
      --animation-duration: 1.5s;
    }
    
    .outer-ring-gradient {
      stop-color: #ff5733 !important;
    }
    
    .outer-ring-gradient-dark {
      stop-color: #cc4529 !important;
    }

## Resetting Animation

To reset the animation (for example, when you want to show the rings filling up again):


    function ResetExample() {
      const [progress, setProgress] = useState([0.8, 0.6, 0.4]);
      
      const resetAnimation = () => {
        setProgress([0, 0, 0]);
        setTimeout(() => {
          setProgress([0.8, 0.6, 0.4]);
        }, 100);
      };
      
      return (
        <>
          <ActivityRings progress={progress} />
          <button onClick={resetAnimation}>Reset Animation</button>
        </>
      );
    }


## License

MIT
