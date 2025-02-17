import { useState } from 'react'
import { Input, InputProps } from '../../lib/components/Input'

export const InputExample = () => {
    const [value, setValue] = useState<InputProps['value']>()
    const [valueDebounced, setValueDebounced] = useState<InputProps['value']>()
    const [transform, setTransform] =
        useState<InputProps['transform']>('titleCase')

    return (
        <section>
            <h2>Input</h2>

            <Input
                type="text"
                placeholder="Name and Last Name"
                // Custom attributes
                label="Name"
                className="my-custom-input"
                value={value}
                onChangeValue={setValue}
                onChangeDebounce={setValueDebounced}
                debounceDelay={1000}
                transform={transform}
            />
            <p>
                <label>
                    Transformation:
                    <select
                        name="tranformation"
                        id="tranformation"
                        value={transform}
                        onChange={(e) =>
                            setTransform(
                                e.target.value as InputProps['transform']
                            )
                        }
                    >
                        <option value="">None</option>
                        <option value="toUpperCase">Upper Case</option>
                        <option value="toLowerCase">Lower Case</option>
                        <option value="capitalize">Capitalize</option>
                        <option value="titleCase">Title Case</option>
                        <option value="snakeCase">Snake Case</option>
                        <option value="onlyNumbers">Only Numbers</option>
                        <option value="onlyLetters">Only Letters</option>
                        <option value="onlyEmail">Only Email</option>
                    </select>
                </label>
            </p>
            <p>
                Transformed value: <code>{value}</code>
                <br />
                Debounced value (1s): <code>{valueDebounced}</code>
            </p>
        </section>
    )
}
