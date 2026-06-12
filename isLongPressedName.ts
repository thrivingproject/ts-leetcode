/**
 * See if each index in name appears 1 or more times in output
 * name and typed consist of only lowercase English letters.
 * @param name 1 <= name.length
 * @param typed typed.length <= 1000
 */
function isLongPressedName(name: string, typed: string): boolean {
    let i = 0, j = 0;

    while (i < name.length || j < typed.length) {
        const char = name.charAt(i);
        let nameCount = 0, typedCount = 0;

        // Needed if name exhausted but typed has leftover chars
        if (!char) return false;

        // Count consecutive chars in name
        while (name.charAt(i) === char) {
            nameCount++;
            i++;
        }

        // Count consecutive chars in typed
        while (typed.charAt(j) === char) {
            j++;
            typedCount++;
        }

        if (nameCount > typedCount) {
            return false;
        }
    }

    return true;
}

isLongPressedName("vtkgn", "vttkgnn");