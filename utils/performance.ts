export const measurePerformance = (componentName: string) => {
    if (process.env.NODE_ENV === 'development') {
        const start = performance.now()
        return () => {
            const end = performance.now()
            console.log(`${componentName} render time:`, end - start, 'ms')
        }
    }
    return () => {}
}