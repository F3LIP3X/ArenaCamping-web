import React from "react"
const SvgComponent = (props) => (
    <div
        style={{
            display: "flex",
            justifyContent: "center",
            width: "50%", // Ajusta el ancho del contenedor como desees
            margin: "0 auto", // Centra el contenedor en la página
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%" // Establece el ancho del SVG al 100% del contenedor padre
            height="auto" // Permite que la altura se ajuste automáticamente para mantener la relación de aspecto
            style={{
                maxWidth: "100%", // Asegura que el SVG no se extienda más allá de su tamaño original
                height: "auto", // Ajusta la altura automáticamente
            }}
            viewBox="-0.5 -0.5 608 323"
            {...props}
        >
            <path
                fill="none"
                stroke="#005700"
                strokeMiterlimit={10}
                strokeWidth={5}
                d="M146 218q160 20 230 50t125 45q55 15 80-15t15-65q-10-35 5-120T536 13Q456-2 336 8T151 48Q86 78 21 128t125 90"
                pointerEvents="stroke"
            />
            <path
                fill="none"
                stroke="#2d7600"
                strokeMiterlimit={10}
                strokeWidth={3}
                d="M156 218V48"
                pointerEvents="stroke"
            />
            <rect
                width={50}
                height={90}
                x={376}
                y={98}
                fill="#6d8764"
                pointerEvents="all"
                rx={7.5}
                ry={7.5}
                style={{
                    filter: "drop-shadow(rgba(0,0,0,.25) 2px 3px 2px)",
                }}
            />
            <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                        overflow: "visible",
                        textAlign: "left",
                    }}
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            display: "flex",
                            alignItems: "unsafe center",
                            justifyContent: "unsafe center",
                            width: 1,
                            height: 1,
                            paddingTop: 143,
                            marginLeft: 401,
                        }}
                    >
                        <div
                            data-drawio-colors="color: #fff;"
                            style={{
                                boxSizing: "border-box",
                                fontSize: 0,
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-block",
                                    fontSize: 12,
                                    color: "white",
                                    lineHeight: 1.2,
                                    pointerEvents: "all",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <b>
                                    <font
                                        style={{
                                            fontSize: 40,
                                        }}
                                    >
                                        {"3"}
                                    </font>
                                </b>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAFECAYAAACj9vlgAAAAAXNSR0IArs4c6QAAEttJREFUeF7tnXesb0URx2eePZZniSVW7Iqxx4JdjBqDYokVC6iIoE+JT1Tsip2ABqQFRMVHENQIIsYgFhRFjQoPiN3YSxQ1GjQqlvF8793ffb/f/Z0yW+acPee3J7n/3N/u7Oxn5uzZMrvLVB5TAmwqvQinhIAhSmqRNv8yfQskBDx9WGs19PSWAtjYLwrgBsCejtpopgJ42h6cyk+MKUWILx4cAU+TdbKAc3k3EgDOpSoaf+ovzYxKAsD9KT3GkgpgY6sVwAWwMQFj8cWDC2BjAsbiiwd7AfbvkvYP2F9HLwR9JdZWo3/AfRHIpJxWwForRdUlQSEJRITMpauqXTxYhSk8UXLAMd4UkzccgW3O5IBt1e2WnpuR5gDnplo3zOYU+dRlch68AT0Txt29iEwUjfFnm7w6MNP1YBuq3lILYG9kfhkyBOxePd0b6FfbAVJnCHgACoZFFsCGcCF6QMATaQM6DNQj4DyA9q1Fj4CN38WU4hNaoQBOaZgaWSsAOJU7hslZAcDGLprPR27Yii6VHuaQ3pUoHtzQbtZv5/HmG9kP7skL/Kvll8OyGsWD/WzhnToCsKXdveuRbYYIwNnWKSvFlICLt4ZaTQk4VHzJVwAb+8BIAY+nyRopYGO3Syh+WoAzdOxpAY70PAv7GAC2UDOS3IDZDQAPWJsMiy6AjY0SBniMrcBAOocBbrH6QPUw9sNw8ckBh6syzZwFsLFdC+AC2JiAsfjiwQWwMQFj8cWDDQDPd1VXDHD/vfQVA2zgrh0ixwE4yPGCMiW3wDgAJ692fwIDAefhHf1hCi8pEHB4gauWcxnwoM45aOEmti8ebIJ1l9ACuAA2JmAsPtCDp9dWWnEOBGylzvTkGgAu3j3vJgaAM/fCnu1fD7hnJTI3SZR6E/XgfDxkooCjnC5p5kEBL/lZPo6XDPKggJPVImNBBbCxcTIBPMG2wRkuE8Cb3GhCvPMEbPzaJhff4hAFcHLaiwILYF/Ans1XAewL2DN9esCeFvbUd3TJ0wMeHQJbhccJeERvyTgBq5yuXys0lTZhwF1W6McAKwy4ywBpfh8p4H68LwXiLACLyO5E9Bgiuh8R3YWIbkJEW4noKkR0rZpzjnFu3D+I6L9EdLn7+z4RfZWIzmXmX6eAk0LGIIBF5JZEtA8RPZmIAPe6CQ+LBnxA30lEn2Dmk1KACpXRG2ARAcSXENFziejORHTVUKU98/2ViL5JRO9l5nM980YnNwfsXv/XE9FeQrTVvMBmJGhOLq2anvcx845ocrUC3Ldh7hNhVl/XDLyLiJ7omgCbOvlLBehLiOh1fXi0CWAReQ0RbXcfK38E/eT4JxGdCj2Z+QqrIpMCFpEHVl/99xDRQ8M+Wvg+1anU9P9oLBD8PSLaxsznR0urEZAMsIg8h4jQJKCHMLbnD5XCb2Hm41MrngSwiLwabZrru7boaOaJKbigX300Mx+aQthMRjRgEXkbEb3SDQhS6jaELLTLgIxvSPejGFBGAZ4Y3BlQQEafGV3L6CcYsIgc6Nrc60drkZ8ANBdHMvMbY1VbBqxwezd4OIuI7hirQG3+PJrqvxDRa5n5hJg6BnmwiJxNRI8P64rFqGuRt9WaGPk9i5nRlQt6vAGLCL6yb+rro9afM9eWhH+ew8x7B9Gt9cCWJkJE7oQZKiK6e2iBI8z3dzesPjpEd50HO+gi8m43BL7aUmH9uVpIPWPzXEZET2XmH/kK0gEmIue9aHsx1bhqz7+J6P3VnAX6+16PD+DDqlUEdMCv7lWCf2K8C3+qVjguJKLzSegS3sJfnIkRkb2I6EHVysUeRHSf7tGjvwINOX5IRHsve3F7t8sH8HdchZJpvEnQbOLlOGY+TlOIm8Q/uDLIy3qYucMA5DBmxnyL+lEBFhEs7xxDRDdQS/ZLiFWHY5j5DX7Z1lO7uecT3boe1vGsnguY+WE+wrWATyai5xv1e39JRC9n5k9tKK4Y7GyupPNmzIY90y2W+nDQpv09ODDzZ5sybFa9E7BT/OtEdDetFh7psPp7QJvCHrLgyVj3+yQRPcrIGa7EfDczYxygejSA96uahqOqCZDrqSTqE3kPRTWO7Sb9TyOi2+pV8Up5BjPjLVE9GsBoew+qGvgtKom6RFgXO4WZX6hL7peq8uQj3Ydvub/uJ6ou9WXMfA+tGA3gr7lukVamJt2Pq7iFJ8WM8dsKcV58OhHdRqOMZxo0a/sw8wWafK2ARWRPIvoIEd1iXljkytn/iOhEZsZbYfaIyOddW5y6DCwv7c/Mn9YI7gK8jYgwPL62RpgyjZeCSplLyUTEomlDOViBfqk2tqILMLo9L078Rb6QmR8cCk6bT0Twpcc64TW0eZTp1gFv4R2kuFlV0waj64PAPAxL7+om2dFk4P++4U9Q6UNWH7eFZkwEIVrHGgS9hHtwdzdoMYWIIBryIUR0byLCVCbA37AhIhL1x1IMlscPV3pLcDKpBZxkyi8ccHBtNmV0Q1eARyDK7asP5e2qD9vNiQizUmi/Pr4WX9LyinUbu13besBJajg84CTViBRi2Ab/joj2rb4j52lU7GyDNUJyTGPYi/gJIkW1k+9TBmzVD/4SM2N8oHomCdh7JKf/9iHlScyMrqvqmSrg5rVDFZbGRH/Dqo52QQBSkgCO/eLH1Xkxt/HKd8OyUXMNWgHnBE5rBBHB4sC+BpPuQXMoSTxYW/nodB0Wr4+X0zewHfp1rmbU5TcE3K//O7jvcCPJTlt6Ykfy06uuGdYmvR5DwF56RCUWESyWHmK4hP8rItqvWvDcCB/QKjxqwK47hgDwR2DiydMr2xntEhYVLzxKwCKCHaLY1Ij5jmtqvSkgHTB/odpf95TQnUjZA3aRPLcioge4oEPEJKfcetvGvf/w1QAv8MoiIlhLe4ZXJpvESUIKsvNgw7U0HzNgWQvR7R/0ydRzNy1MNRH5rtuBHyYgPtdv3XAYu0Cjn6w8WESwQxRBI0NtZkQ4wcExkUbeoVPRJvQQICJPqOB+YCNSMmm/q1URlPQV9ExSx2rk5sEvcGFa1/GwS2xSLAGdzMyviBWUfRssIn0FeYMFvPZi62MNcvNgNA8m8WqbvAu9BOzmxMkAC0/qGZTcACNGOHjLlO4VlyuI1o6WOZOZ8UE1fXIDbBFo2AYQKxTfqjb2fNTq8KTcAA/VB0Z7jEh7NFFHhc47RH3k1tqm1A3UnEZNkZym7++ycID+KTa5MzNWRqKfbDzYbbTB7iIcSDf08x8iQmAJtjcEH3IHuDkBtgiVjTUUgkwOWdig4ykxJ8BvJ6JX9bDR0RMR/blyxLcyc6K9yobtbFvNqoDBvvrAvoCRHvv43hkSFZqTB1uFOoUArcvjvSsKQnICPNuqiy85jhDAxwUnquIP3beds4kYtx8OQeGPdMtGCAy33kMNXt6T8DkBxnmSmIvFiano/Ksfd8QN2m+s1Vn3QryWkbIB3EZT+1mIP3lwUYuG2VJE+GDkh4P4Op9RAO6sxeKABQui6E9jN6bvHhJtUfjoYUmp86TAdcBaF9EWbyXTo3wRwcHMzzNsm79dTdLv2TWsHoUHh9pfRE4homcbBALC1KrzI/ICHEqywbNdKOvHqqnJe3o4vzqpEF3MRA9v82JVE2E90aOuUUBCEXkREWHbmMUJhZ0B2Xl5cABATRYROQcbV5bSpllUbT3eYFUAWx6J07rraCUAw3OrkACrQ50w6jyUmbH5fOlZJcBWu+8x8Dieecu2uq2rqwTYMuaice/cKAGH9OaMw7J+QET3r+uujRKwpudQl8YwsPA3GDXWbTFYNcBWc86Ym0Bc21KcxaoBRsAJ5pFTP41HHCwCDmncUqtqKK9pWSrBeONfbkkJsXULz6Q9eLO/GK77NZ4IOGnAm70pBLDSuwtgN5qzaoP7aSLmzurBGe+7ufN6cCTuTd1+tlOrSJn9DZvZVtGGG2yUH7mOmrvFxXutn8QquxExDjy6sfvD3ZtdSzSfY+bHJgEc8EE27Af7AXaLhzjVA4dgYh4Vl5gCYOzhx14HayYxhBNiPJJrPCip9iO3tBklXU17OVaxYRRXc0yv8hPWXf+fV/fSPb0u3KAJMA6Z+0x1Y+AdumV7pVCtY3lJVCYWkSOwRUvRjCklLiS7qDos9L4b/5lrvhq7aSJiFW1+NjPjns+kT1eTXMUfY5sW9uFZPI11agNstWf4F4hZYOZvWNS0DrSIPA5nZrrejHexHQ0JYokRFY/zKpaeNsBWW6pwvCJ2+CS9ebCNmoggQOSAxKd4z4pEeOuBa8dFegJ+GhHhqi8c9pn68T69KVSBHrYmIDBxj6al+zYPRgiS1e0DOMP9BGZGVLvpIyJnVNGZcBaraYHwVWV3RJbV/RnosuHVOtOKsIjgGHPc3LJ1bV9nesRxcREiYnXFw4ypVyiojyHchw23w1ju3G9tHqBvq01doPOX3QHMPvXTpoVfIRYYt6sE3zq4uTAHF3d/2FyJuV6gqpnrfGla75DTYmxPt35JlNA23hJ/O7eIoI+NDSu3TqNeoxRVd1MDGKdYW91JMa/9H4noiLoN2hpQ7m3DwXRo1vCBtnwQC7GDmVFW69MJGLlF5MNEhEPnU94GU6cYvBnt8rE+e4dFBBfp4ZgvXK+jqlMXmLXfmz+MP3OXlXQOllTKeJ/Hq9K+NdHs0r6dRITT9i5lZsyNrNd7/dI+zPQ9uudL+1C81+2IKsCuUpb3A8WbpD8Jqsj2mTo+gDHDZhbM3B+fqJIwLMYtCvgmqR41YOfFiO/CtJ/VzYgqpQdKFHSGpRdgBxlRirjXPnZ1YyBOQcXim3BeyHJXCGDrWweDCBhnCh5xegN2Xrw7NuO5L7lx3QYXj0urcW5EZ5esTtMgwA4yJrGth6ND08Vo7aDYkwCXK7G2LNC1CLPWHx0hZPW0WvQxiwAb7MFznX6cPo2tq9jxPoVnfW6EaBtz/NzIBuBuf21m5wJSsOaF68/YaO61D+MlP8My2oPnPBm9C5zUhCMFuiJ8+oDlWwb6uTjSdnvX/mMfwckAz4HejvN3e7hr3qeeXWlxlBeOjElylNd8YckBz3Xj0MNYux1go0D196WLh+J3XVnw2rNwGJPq+K6AdtQE8Jw3o7nAHRe4ktK0LAXy+SSIZcDGxDczr51jafb0Uml3/SPO58UU45BD7CuF6CImOtxysdW8iVhwh7nXSkTQZGClFxfe3agnr0ZjcTkR4aJpBLwo1/4C2oOa96AXD657/zBIEVxhvn6xKoK1U/Y80AQg4hHD29NiRmKxbcdggDcr7lYpsEKBoG4Av5m7dBrHddVdPo1VXVwjjBUGxOfixCoso2PWa2P1IxZQbP5sAMdWxDa/rrmoS1UA21pG03XSWc9Yz9GKLx48M52RHy0BNionbw80rHTxYGPTTxewoVf62GS6gH0oGKbNAnAOzmalQxaADR1ocNEFsLEJJgTY6iWPs8CEAMeBsMpdAFuRdXIL4ASA2xqnRcB5NmMJEESIiGRSPDiCvSZrAayhFJGmAI6Ap8laAGsoRaRJBjjyWxBRhbyzJgOcdzU9tUvoLXkBTlgxT6RmyfMCbFbN4QTXAp6gI0UTDmLCiSMe1UqoE0Zz6RRgrUoWTYR1JTspGybIAnCy+mVoqV2AM1QuGfgBBfHKczUGMP4mwhhQrPMPCjhzNh1sddoPCjjWO8aQvwA2tlIAYN2rYaz3aMQHAA6o2wrbpB/AM5usIOh+AQc4/9izFMDGFhwY8PTbjIEBd7tPKhOkktOt8WKK7AH7Vii39JkCHsrf0psnU8DpKxokMYGdVwBwAkpB1lnPtAKAI+gkyFoAJ4DYJqIALoCNCRiLLx5cABsTMBZfPLgANiZgLH6iHjzs4GLeZnGA86mHsR+Gi48DHF5uS85pWS1DwCZWG0DouqMMDnha/rpsx8EBh7nWeMwyUsBhZkmXS2/gAjgd9VpJBfB0ADe/VvoXzpiGgfjiwQZQ043kjJXLW7zuvSseHGRFfXOXKWCddwSx6TlTpoB7pmBYXAFsCBeiC+AxAe695ey9wA5r1OhTPHhMHmys6yjFFw82NlsU4NyaQGNWQeKjADeWWMhvoLEBHGTr8WXS+JEJYE3B48MZprEJ4DBVpplrF+DidiYWLh6sxhrmgQWwGnBYwhEBDvOgMCzpco0IcH2lw7GH5/TBrwPcjy4+eo8mrQ6wZXUsjGchM5BBPOCMKhPIwDRbPGBT9cYvvAA2tmE7YMPX31C0MTI/8aYevCoQ25CHAw6kF5jNz20ySh0OOKNK5KxKAWxsnQI4GLCusSuAgwHrMhbAOk7BqaYJWPf2BkPzyThNwEoCfdhh1ID7AKS0VWOyAQGPAU8s3hIfHE+wQ0ISD14NXwyzxS7AhVIYwT48OFiz3IzqoY82aZImIhjwCmQsgI2NPCnA86+t9hU25tuyjSsXDesI5KzbJn0n5cHW3hgi///S3p+DGOZujwAAAABJRU5ErkJggg=="
                    width={22}
                    height={81}
                    x={390}
                    y={104.5}
                />
            </switch>
            <rect
                width={50}
                height={90}
                x={86}
                y={98}
                fill="#6d8764"
                pointerEvents="all"
                rx={7.5}
                ry={7.5}
                style={{
                    filter: "drop-shadow(rgba(0,0,0,.25) 2px 3px 2px)",
                }}
            />
            <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                        overflow: "visible",
                        textAlign: "left",
                    }}
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            display: "flex",
                            alignItems: "unsafe center",
                            justifyContent: "unsafe center",
                            width: 1,
                            height: 1,
                            paddingTop: 143,
                            marginLeft: 111,
                        }}
                    >
                        <div
                            data-drawio-colors="color: #ffffff;"
                            style={{
                                boxSizing: "border-box",
                                fontSize: 0,
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-block",
                                    fontSize: 12,
                                    fontFamily: "Helvetica",
                                    color: "#fff",
                                    lineHeight: 1.2,
                                    pointerEvents: "all",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <b>
                                    <font
                                        style={{
                                            fontSize: 40,
                                        }}
                                    >
                                        {"1"}
                                    </font>
                                </b>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <image
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAFECAYAAACj9vlgAAAAAXNSR0IArs4c6QAAC8RJREFUeF7tnT2oLUkRx//9/GBRNjXSTBQMBDEXPwIV/GBjWUEEA0EFQRbxExH1gQoLuguuwiqCmYiZIigYKIipYm5kImKgPNT2zLtz954758x0VVdVd/VMnfDd6uqqX/27pqdnznkJ8TElkEy9h3MEYGMRBOAAbEzA2P2xFDxlm42JLtzvD3AHiFsl2x/gtgItzkYG7EwYxcS8GJABuwi4ssqVw1RSHguwSsptnXQE3FNX7SB3BNwuSe5MmqUPwFz6TPsGgDX1wMzOgXkDwA6y7BiCK8B71LorwNpC81CwXQPWLliNvwBcQ40xJgAzYNWYBuAaaowxOwfc/zK3c8AMqW2YSsokByyZXSd/117kgF2n1z+4ACyoAWXxBmABYMrQnQCmaImCQ9+mAWC/yevjvPTYAHCLNPzOEYCNa+ML8A67iS/Axmrq4T4AG1MPwAHYmICxe4aCd3gFMoY7fUGDAdg6Gr/+JdIyACwJRwuyhxhucjEArAXJ6AS8QXjnUwgB+1FKY27k6YSAyfMc1vAK4M6q7Dy9thJCwWdELWobgLUlu/B3FbBFJY3zcOs+FGxcGgeA19cLZSVRbIwZbrp3ALhn+vZzB2BjxgF4XMDeu6Mx2dl9KHiLs4JGArCqkC8rMg5ghpoYpqp4rzkbB7AGig7kdQF3SECDu6UPXcCWka75dl7U8QHXFlVSGMbY4wKuLQxzHAMwo2zMIHZlvsB0B7grv66T69X3ShoMBVPj2AksaroFOwPA89sWDX7C0LqUGv5tAHOqr5EFZ77Gtv0BayTsuEj7AKxRJCMfZcCO1WHERNVtGbDqdA6dGQvIFWBurlz7HuV1BZgNYADCYwNmV6T9gADMZs5bNgGYDXhjQJuziEFPxjVBP/Z1QzsUrA72vsMAHIDvlpsxC5n7lWtfKFiGtTj6DjBv91F0HAY3BELBxkoIwKuAdZZ0AA4FMwnoCI856bq5KwU7Y6MC2RVglYyWThSqJnFxA1jiwYTKfpzuX8GdaxWAjQsQgAOwMoHG15sLBTeeX5meP3fRIoxrEoAD8C2BMZvXcArOOb8fwPcBvOaq+Kb3kmlZPQLwMKX0RUsRvxQKRR8UG8tgJ9855+cBfAzAA+FcbQELg20yPOf8BgA/B/BGhQkD8BJizvkbAD4N4BW6gO3WZqFb2U3MBaSs3mn6UPB5EXLO3wLwCSX1BuAF3HcCeBHA67jK37APBd/CyTlPF7b3kTdgW1W428YF4Hlb9mUAzwD5CeoGF7S9cADOOb8XwPdONxavVWwNt66ODTjn/KbTfvcnAN5sAPfYF7nTjuHJE9ifAniXpO8WOsVxFZxz/iGADwF4mZF6j6vgnPNDAJ8E8IQh3GMC1oar2iIqb2ppB3vGUpq3Yy8A+DCAVzaY7jgKni9oPwDwFICXN4J7DMDzVuw5AG+T7BYqi6K4i1jvH91aRM75gwC+CeD1lYCkwxQBr4fSBXDO+avzTmHa79p8yrfL+wM8t4RnAbzDdI9bhuupB1fuTxa6zDl/9PRP08GNxblCzSrYh4JzzhPQSbUfEO0SaKrkgB4fcM75mfkZ2vVH7Bwc+rbjAs45v/t0w/A1AG/psP2ilmI8wPNFbHqRY9qCWZ8lUEGu2Y0DeAb7OQDTWzebWy/9VlrN2Qvg9V1Ezvnt8352agmvqk61z0AvgO9nP+8KPj63gekNG8szW0v0fMAVO1b2ndwJ8PTi3bSnHf3DB1yRsX/Adk1bCfC2rP0DrlANcYgS4O3ZRgD8dwCvZh3E01T/CMgPU3pw5f3gima7wvkeYIrbxj34z/N7EV8pbf+Iqj03O7SCJw3+AcBHALwVwHctAVOEVVHAx0M8toj/AvjZBDel9M+c89PWgGvhUcZ5A/yv6fsXKaXpsf3jTwCmlJFm81cAn00p/fjcvB9gncbhQcFTS/g1gE+llP60rEU/wDRVlKx6A/4HgO+klD6/FmgAJr6MuwA47RJ+O733m1L6/ZYKAvBVOps7/b8B+HZKaXoHrfjhAabdYcyT7m4f/O95+/WZlNJ0QSN9eIBJLm+N7ACfXR/Ve/AVDf0HwG8AfKHUDq7hGRLwWSLqgM98T2D/eNrKfiml9AuWts6MewHW2aTZ3MlNS+93AL4uAVu80WC126vltWsRRgqetly/nC9gmzsDjppZCuZBHwLwdJPwFwA/Ov28wHPT2QEHHsV2EzAP6HI6t4Cnr1W9B8CvADyfUppOvUSfrX7HUjAvikcZePig1e9F8GJrZ20JWOMHOUoXQ/YuohptKZIVx94Bl3i0A1yKpCtgbvXp9gE4evDBnmhUrvTqYfvqwfTWUg2MO3BfgLnZN7APwMaQA3AA3iSQvP+AeyhYS8ErF9gArAW4652cXRJxJxd3cjd3chl4UlkNPs+D7RbTdc/Rg42JnwOueoCxPuiICr7cSnRTsNKxgXJb05dzN8BKqRwc8Np3NJTo1rzhrjc1zVMomMap2ioAV6OjDRwP8P2ro88efBbjeIDvC4cP+GL7orSfibMI2pLWtuqq4ErtnA/jK/glgpWzMyvQFTAz1mvmAsAKsxNcBOAiJJnSA3ARsMwgAMv4bY9OQP7fQd7skS30+iqIFRzHldvwxYDX3R/xPPiSRgCuX/2kkQGYhKneqAdgzetN3GjEY3vONo31WLT1RU5zYfBaQq+vcWl8y6iU6WFbRAYepZb/r3KpEr3+3uMip3lgaK5gaePpClhBVeaApTEGYAJBiYoDMAGwxCQAS+gRxgZgAiSJifjtStXTtPVmt/YXwUWO1llpVusUQsESeRLGBuAtSFL5HvHXVwmiUzXxqWC6cgQ9WJXjqjOfgOm5B+A4D+acB9OVBaD1eTAruGbGei3i4jDeOWB6nxcVQw/wRRjOAYuw0QdrAF55kBSApzJoAF4pZwAOwNSVLujXwyh4JcfYB8c+OPbB1EaxahfvRYgR1jsYpgevpBg9OHpw9OD69U8Y6a9F8PacixbBG0zgc3gT9z149AoFYOMKDgp4nFY2KGBj2Sm6D8ALmNprIwArqvWaqwAcgI0JGLsPBQdgJgHtqxRz+qV5UcHO4hWm2354EXD7kPY1IxtwKJonADZgnvuSdedyrU2vGFZnwMa3UaX6Nvi7L8ANEm49hQ/AikuyNcDSfD4Al6Ic+O/HAdxplRwHcKdVEICNwcsBS5aeZKwxmFr3y5TkgGsjOci4AGxcaJ+AJa2jwe0vpyY+AXMycG47HmCJujsUYzzAHSBJpgzAEnqEsf0Bu1/ysgD7A76ngvVkZGkSpMYyoUfjAzA9XhIGZXekOdeMfAAWpcAY3IH8AQB3oHpW80rAfYNmaLa7aSVgnbiPUKamgL0BbRGPDHCLCHUWSzcvMsDdwrafWEs77gBXJVY1SK9IW9O7A6yXtsCTYsG6AlbMQ0Dz2lC9yLoCVqbi0l0ANi5LAPYMWK9TGWfZ0b2hggP/VFdDwB1l42jqQwDus5ZuZj0EYJGghdUJwCL65cEBuMxIZBGARfjKgwNwmZHIIgCL8JUHB+AyI5HF4QELd2FF+IcHXCQkNAjAQoCPh28sgwCsAXjDRwC+gKPblQMw6ZFcPfQ7wPU+jBfZ2O5Dwcb1C8BHB+y+cxUCbKhg96hMtNwQsH78I5RsaMD6JdP3GID1md7z6A/wCOueURR/gBnBj2DaHvDOFFoqsgzwwWCVYK4da9SMizFEAjIFEyc5spkMcLSIonZkgIvuNQ3GrOZAgDWL1c5XW8BjilBUjbaARaGOOTgAG9ctAAdgWwKUywLFZi3KULBy/ZbFCMDKgJfuAvAKYElbOHcZgLkKZpIPwFzATHtbwMxqM2MfwtwW8BAIbIMMwLZ8/XyV1lc30YsmFLwXBetpwpiIsvtQsDLQuJMzBroC+KgL2J52tAhjxgE4ANMIWDe5Wv+hYFr9qq0CcDU62sAAXOJU2xtmvwG4BJj09/UqBGASwHqjAFzPjjTSIWBh0yOlvTBSnfK+M4eArxFSJVBTgo0x27ENAliZSQN3t9gDsDHs/wMwQQmC6DmRpwAAAABJRU5ErkJggg=="
                    width={22}
                    height={81}
                    x={100}
                    y={104.5}
                />
            </switch>
            <rect
                width={50}
                height={90}
                x={216}
                y={98}
                fill="#6d8764"
                pointerEvents="all"
                rx={7.5}
                ry={7.5}
                style={{
                    filter: "drop-shadow(rgba(0,0,0,.25) 2px 3px 2px)",
                }}
            />
            <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                        overflow: "visible",
                        textAlign: "left",
                    }}
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            display: "flex",
                            alignItems: "unsafe center",
                            justifyContent: "unsafe center",
                            width: 1,
                            height: 1,
                            paddingTop: 143,
                            marginLeft: 241,
                        }}
                    >
                        <div
                            data-drawio-colors="color: #ffffff;"
                            style={{
                                boxSizing: "border-box",
                                fontSize: 0,
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-block",
                                    fontSize: 12,
                                    fontFamily: "Helvetica",
                                    color: "#fff",
                                    lineHeight: 1.2,
                                    pointerEvents: "all",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <b>
                                    <font
                                        style={{
                                            fontSize: 40,
                                        }}
                                    >
                                        {"2"}
                                    </font>
                                </b>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={22}
                    height={81}
                    x={230}
                    y={104.5}
                />
            </switch>
            <rect
                width={50}
                height={90}
                x={516}
                y={98}
                fill="#6d8764"
                pointerEvents="all"
                rx={7.5}
                ry={7.5}
                style={{
                    filter: "drop-shadow(rgba(0,0,0,.25) 2px 3px 2px)",
                }}
            />
            <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                        overflow: "visible",
                        textAlign: "left",
                    }}
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            display: "flex",
                            alignItems: "unsafe center",
                            justifyContent: "unsafe center",
                            width: 1,
                            height: 1,
                            paddingTop: 143,
                            marginLeft: 541,
                        }}
                    >
                        <div
                            data-drawio-colors="color: #ffffff;"
                            style={{
                                boxSizing: "border-box",
                                fontSize: 0,
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-block",
                                    fontSize: 12,
                                    fontFamily: "Helvetica",
                                    color: "#fff",
                                    lineHeight: 1.2,
                                    pointerEvents: "all",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                <b>
                                    <font
                                        style={{
                                            fontSize: 40,
                                        }}
                                    >
                                        {"4"}
                                    </font>
                                </b>
                            </div>
                        </div>
                    </div>
                </foreignObject>
                <image
                    xlinkHref="data:image/png;base64,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"
                    width={22}
                    height={81}
                    x={530}
                    y={104.5}
                />
            </switch>
            <path
                fill="none"
                stroke="#2d7600"
                strokeMiterlimit={10}
                strokeWidth={3}
                d="M316 248V8M476 308V8"
                pointerEvents="stroke"
            />
        </svg>
    </div>
)
export default SvgComponent
