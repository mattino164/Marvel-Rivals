// ======================================================
// Resolver.js
// Utility for creating a "text resolving" effect, where
// a string gradually appears with randomized character
// transitions, often used for hero names or dynamic titles
// ======================================================

export const resolver = {
  /**
   * Resolve a string with a random character animation effect
   * @param {Object} options - Configuration object
   * @param {HTMLElement} options.element - DOM element to update
   * @param {string} options.resolveString - Final string to reveal
   * @param {number} options.offset - Current starting index for reveal
   * @param {number} options.timeout - Delay between character changes (ms)
   * @param {number} options.iterations - Number of random characters per position
   * @param {Array<string>} options.characters - Pool of characters to randomize
   * @param {Function} callback - Optional callback when effect completes
   */
  resolve: function resolve(options, callback) {
    // Determine the string to resolve
    const resolveString =
      options.resolveString ||
      options.element.getAttribute('data-target-resolver')

    // Merge options with resolved string
    const combinedOptions = { ...options, resolveString }

    // ------------------------
    // Helper: get random integer between min and max
    const getRandomInteger = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min

    // Helper: pick a random character from the pool
    const randomCharacter = (characters) =>
      characters[getRandomInteger(0, characters.length - 1)]

    // ------------------------
    // Animate random characters before revealing actual character
    const doRandomiserEffect = (options, callback) => {
      const { characters, timeout, element, partialString } = options
      let iterations = options.iterations

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = { ...options, iterations: iterations - 1 }

          // Final iteration: show actual character
          if (iterations === 0) {
            element.textContent = partialString
          } else {
            // Replace last character with random one
            element.textContent =
              partialString.substring(0, partialString.length - 1) +
              randomCharacter(characters)
          }

          // Recursive call for next iteration
          doRandomiserEffect(nextOptions, callback)
        } else if (typeof callback === 'function') {
          callback()
        }
      }, timeout)
    }

    // ------------------------
    // Main recursive resolver effect
    const doResolverEffect = (options, callback) => {
      const { resolveString, offset } = options
      const partialString = resolveString.substring(0, offset)

      // Add partialString to options for randomizer
      const combinedOptions = { ...options, partialString }

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = { ...options, offset: offset + 1 }

        // Continue revealing characters until done
        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback)
        } else if (typeof callback === 'function') {
          callback()
        }
      })
    }

    // Start the resolving effect
    doResolverEffect(combinedOptions, callback)
  },
}
